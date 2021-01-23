import BloodBase from "./BloodBase";
import { _BossData } from "./Boss";
import { _GameEvent } from "./_GameEvent";

export class EnemyHouse extends BloodBase {

    lwgOnAwake(): void {
        this.bloodInit(50);
        this._ImgChild('Blood').visible = false;
    }
    enemyHouseStage = false;
    lwgEvent(): void {
        this._evReg(_GameEvent.Game.enemyHouseStage, () => {
            this.enemyHouseStage = true;
            this._ImgChild('Blood').visible = true;
            this.attack();
        })
        this._evReg(_GameEvent.Game.enemyHouseCheckWeapon, (Weapon: Laya.Image, numBlood: number) => {
            this.checkOtherRule(Weapon, 50, this.enemyHouseStage ? numBlood : 0);
        })
    }
    deathFunc(): void {
        _BossData._ins().createLevelBoss(this._SceneImg('BossParent'));
    }
}