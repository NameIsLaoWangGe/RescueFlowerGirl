
import { LwgAni2D, LwgNode, LwgTimer } from "../Lwg/Lwg";
import { EnemyAttackControl } from "./EnemyAttack/EnemyAttackControl";
import { _GameEvent } from "./General/_GameEvent";
import _RoleBase from "./Levels_RoleBase";

export default class Levels_Land extends _RoleBase {
    lwgOnAwake(): void {
        this.bloodInit(100);
        this._ImgChild('Blood').visible = false;
        LwgTimer.frameLoop(1, this, () => {
            this._Owner.rotation += 0.1;
        })
    }
    landStage = false;
    lwgEvent(): void {
        this._evReg(_GameEvent.enemyLandStage, () => {
            Laya.timer.clearAll(this);
            const time = Math.abs(this._Owner.rotation % 360) * 10;
            LwgAni2D.rotate(this._Owner, 0, time, 0, () => {
                this._Owner.rotation = 0;
                this._ImgChild('Blood').visible = true;
                this.landStage = true;
                EnemyAttackControl.Level1.land(this._Owner as  LwgNode.Image);
            })
        })
        this._evReg(_GameEvent.enemyLandCheckWeapon, (Weapon: Laya.Image, numBlood: number) => {
            this.checkOtherRule(Weapon, 160, this.landStage ? numBlood : 0);
        })
    }
    deathFunc(): void {
        this._evNotify(_GameEvent.enemyHouseStage);
    }
}