import Lwg, { LwgTimer, LwgTools } from "../../Lwg/Lwg";
import {  _Whom } from "./_Whom";
import { _CreateBullet } from "./_CreateBullet";

export class Level1  implements _Whom {
    /**向下发射均匀的三个子弹*/
    enemy(enemy: Lwg.NodeAdmin._Image): void {
        const angleSpacing = 15;
        const speed = 5;
        LwgTimer._frameRandomLoop(120, 300, enemy, () => {
            const ep = new Laya.Point(enemy._lwg.gPoint.x, enemy._lwg.gPoint.y);
            for (let index = 0; index < 3; index++) {
                const bullet = _CreateBullet.EB_single(enemy);
                let _speedAdd = 0;
                LwgTimer._frameLoop(1, bullet, () => {
                    const point = LwgTools._Point.getRoundPosNew(index * angleSpacing + 90 - angleSpacing, _speedAdd += speed, ep);
                    bullet.pos(point.x, point.y);
                })
            }
        })
    }
    /**向下发射均匀发射10个子弹和8个子弹交错，并且速度不一样，角度也会错开*/
    land(enemy: Lwg.NodeAdmin._Image): void {
        let time = 0;
        const speed = 5;
        LwgTimer._frameLoop(30, enemy, () => {
            time++;
            let num = 5;
            if (time % 3 == 0) {
                num = 18;
            } else if (time % 2 == 0) {
                num = 10;
            }
            for (let index = 0; index < num; index++) {
                const bullet = _CreateBullet.EB_single(enemy);
                let _speedAdd = 0;
                LwgTimer._frameLoop(1, bullet, () => {
                    const unit = 180 / num;
                    const point = LwgTools._Point.getRoundPosNew(unit * index + unit / 2, _speedAdd += speed, enemy._lwg.gPoint);
                    bullet.pos(point.x, point.y);
                })
            }
        })
    }

    /**有规律的扇形扫射*/
    house(enemy: Lwg.NodeAdmin._Image): void {
        const speed = 5;
        const num = 8;
        const spacing = 20;
        let angle = 0;
        let dir = 'add';
        LwgTimer._frameLoop(20, enemy, () => {
            if (angle > 180 - (num - 1) * spacing) {
                dir = 'sub';
            } else if (angle <= 0) {
                dir = 'add';
            }
            if (dir === 'add') {
                angle += 10;
            } else {
                angle -= 10;
            }
            let timeAngle = angle;
            const ep = new Laya.Point(enemy._lwg.gPoint.x, enemy._lwg.gPoint.y);
            for (let index = 0; index < num; index++) {
                const bullet = _CreateBullet.EB_single(enemy);
                let _speedAdd = 0;
                LwgTimer._frameLoop(1, bullet, () => {
                    const point = LwgTools._Point.getRoundPosNew(spacing * index + timeAngle, _speedAdd += speed, ep);
                    bullet.pos(point.x, point.y);
                })
            }
        })
    }

    /**交差两个扇形在boss的两边*/
    boss(enemy: Lwg.NodeAdmin._Image): void {
        const speed = 6;
        const num = 8;
        LwgTimer._frameLoop(30, enemy, () => {
            const unit = 180 / num;
            const ep1 = new Laya.Point(enemy._lwg.gPoint.x + 100, enemy._lwg.gPoint.y);
            const ep2 = new Laya.Point(enemy._lwg.gPoint.x - 100, enemy._lwg.gPoint.y);
            for (let index = 0; index < num; index++) {
                const bullet = _CreateBullet.EB_single(enemy);
                let _speedAdd = 0;
                LwgTimer._frameLoop(1, bullet, () => {
                    const point = LwgTools._Point.getRoundPosNew(unit * index + unit / 2, _speedAdd += speed, ep1);
                    bullet.pos(point.x, point.y);
                })
            }
            for (let index = 0; index < num; index++) {
                const bullet = _CreateBullet.EB_single(enemy);
                let _speedAdd = 0;
                LwgTimer._frameLoop(1, bullet, () => {
                    const point = LwgTools._Point.getRoundPosNew(unit * index + unit / 2, _speedAdd += speed, ep2);
                    bullet.pos(point.x, point.y);
                })
            }
        })
    }

    /**每次发射三个扇形，然后随机方向*/
    heroine(enemy: Lwg.NodeAdmin._Image): void {
        const speed = 10;
        const num = 6;
        const spacing = 8;
        LwgTimer._frameLoop(15, enemy, () => {
            const fA = LwgTools._Number.randomOneInt(360);
            const ep = new Laya.Point(enemy._lwg.gPoint.x, enemy._lwg.gPoint.y);
            for (let index = 0; index < num; index++) {
                const bullet = _CreateBullet.EB_single(enemy);
                let _speedAdd = 0;
                LwgTimer._frameLoop(1, bullet, () => {
                    const point = LwgTools._Point.getRoundPosNew(fA + spacing * index, _speedAdd += speed, ep);
                    bullet.pos(point.x, point.y);
                })
            }
            for (let index = 0; index < num; index++) {
                const bullet = _CreateBullet.EB_single(enemy);
                let _speedAdd = 0;
                LwgTimer._frameLoop(1, bullet, () => {
                    const point = LwgTools._Point.getRoundPosNew(fA + spacing * index + 120, _speedAdd += speed, ep);
                    bullet.pos(point.x, point.y);
                })
            }
            for (let index = 0; index < num; index++) {
                const bullet = _CreateBullet.EB_single(enemy);
                let _speedAdd = 0;
                LwgTimer._frameLoop(1, bullet, () => {
                    const point = LwgTools._Point.getRoundPosNew(fA + spacing * index + 240, _speedAdd += speed, ep);
                    bullet.pos(point.x, point.y);
                })
            }
        })
    }

}