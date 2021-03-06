import Start from "../Start";
import Levels from "../Levels";
import _SubPkg from "../../Lwg/_SubPkg";
import _PreLoadCutIn from "./_PreLoadCutIn";
import _PreLoad from "./_PreLoad";
import _Guide from "./_Guide";
import _Parameter from "./_Parameter";
import Defeated from "../Defeated";
import Victory from "../Victory";
import _SceneName from "./_SceneName";
import { LwgAdaptive, LwgClick, LwgInit, LwgPlatform, LwgScene, LwgSceneAni } from "../../Lwg/Lwg";
export default class _Init extends LwgInit._InitScene {
    lwgOnAwake(): void {
        LwgPlatform.Ues.value = LwgPlatform.Tpye.Bytedance;
        Laya.Stat.show();
        Laya.MouseManager.multiTouchEnabled = false;
        LwgSceneAni.Use.value = {
            class: LwgSceneAni._fadeOut.Close,
            type: null,
        };
        LwgClick.Use.value = LwgClick._Type.largen;
        LwgAdaptive.Use.value = [720, 1280];
        LwgScene.sceneScript = {
            _PreLoad: _PreLoad,
            _PreLoadCutIn: _PreLoadCutIn,
            _Guide: _Guide,
            _Parameter: _Parameter,
            Start: Start,
            Levels: Levels,
            Defeated: Defeated,
            Victory: Victory,
        }
    }
    lwgOnStart(): void {
        this._openScene(_SceneName._PreLoad)
    }
}


