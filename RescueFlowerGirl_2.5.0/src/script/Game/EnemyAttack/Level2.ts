import { LwgNode, LwgTimer, LwgTools } from "../../Lwg/Lwg";
import { Whom } from "../General/_GameInterface";
import { EnemyBullet } from "./EnemyBullet";

export class Level2  implements Whom {
    /**向下发射均匀的2个子弹,没有角度，垂直向下*/
    enemy(enemy: LwgNode.Image): void {
        const speed = 8;
        LwgTimer.frameRandomLoop(120, 300, enemy, () => {
            const bullet = EnemyBullet.EB_two(enemy);
           LwgTimer.frameLoop(1, bullet, () => {
                bullet.y += speed;
            })
        })
    }
    /**向下随意喷射两个子弹，速度很快，有方向*/
    land(enemy: LwgNode.Image): void {
        const speed = 12;
        const num = 2;
       LwgTimer.frameLoop(5, enemy, () => {
            let fA = LwgTools.Num.randomOneInt(0, 180);
            for (let index = 0; index < num; index++) {
                const ep = new Laya.Point(enemy._lwg.gPoint.x, enemy._lwg.gPoint.y);
                const bullet = EnemyBullet.EB_two(enemy);
                let _speedAdd = 0;
                bullet.rotation = fA + 90;
               LwgTimer.frameLoop(1, bullet, () => {
                    const point = LwgTools.Point.getRoundPosNew(fA, _speedAdd += speed, ep);
                    bullet.pos(point.x, point.y);
                })
            }
        })
    }

    /**一条弹幕徘徊*/
    house(enemy: LwgNode.Image): void {
        const speed = 15;
        const num = 1;
        const spacing = 12;
        let angle = 0;
        let dir = 'add';
       LwgTimer.frameLoop(3, enemy, () => {
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
                const bullet = EnemyBullet.EB_two(enemy);
                bullet.rotation = spacing * index + timeAngle - 90;
                let _speedAdd = 0;
               LwgTimer.frameLoop(1, bullet, () => {
                    const point = LwgTools.Point.getRoundPosNew(spacing * index + timeAngle, _speedAdd += speed, ep);
                    bullet.pos(point.x, point.y);
                })
            }
        })
    }
    /**三条弹幕旋转*/
    boss(enemy: LwgNode.Image): void {
        const num = 3;
        let time = 0;
        const spacing1 = 16;
        const spacing2 = 10;
       LwgTimer.frameLoop(3, enemy, () => {
            time++;
            let fA = 0;
            for (let index = 0; index < num; index++) {
                const ep = new Laya.Point(enemy._lwg.gPoint.x, enemy._lwg.gPoint.y);
                const bullet = EnemyBullet.EB_two(enemy);
                let _speedAdd = 0;
                let angle = fA + time * spacing1;
                let speed = 6;
                if (index === 0) {
                    angle = fA + time * spacing2;
                    speed = 12;
                }
                angle += index * 180;
                bullet.rotation = angle + 90;
               LwgTimer.frameLoop(1, bullet, () => {
                    const point = LwgTools.Point.getRoundPosNew(angle, _speedAdd += speed, ep);
                    bullet.pos(point.x, point.y);
                })
            }
        })
    }

    /**三条向下固定方向的弹幕和一条旋转弹幕*/
    heroine(enemy: LwgNode.Image): void {
        const num = 4;
        let time = 0;
        const spacing2 = 10;
       LwgTimer.frameLoop(5, enemy, () => {
            time++;
            let fA = 0;
            for (let index = 0; index < num; index++) {
                const ep = new Laya.Point(enemy._lwg.gPoint.x, enemy._lwg.gPoint.y);
                const bullet = EnemyBullet.EB_two(enemy);
                let _speedAdd = 0;
                let angle = 30;
                let speed = 12;
                if (index === 0) {
                    angle = fA + time * spacing2;
                }
                angle += index * 30;
                bullet.rotation = angle + 90;
               LwgTimer.frameLoop(1, bullet, () => {
                    const point = LwgTools.Point.getRoundPosNew(angle, _speedAdd += speed, ep);
                    bullet.pos(point.x, point.y);
                })
            }
        })
    }
}