import { Interactivity } from "./Interactivity/Interactivity";
import { Particles } from "./Particles/Particles";
import { PolygonMask } from "./PolygonMask/PolygonMask";
import { BackgroundMask } from "./BackgroundMask/BackgroundMask";
import { Presets } from "../Utils/Presets";
import { Background } from "./Background/Background";
import { Emitter } from "./Emitters/Emitter";
export class Options {
    constructor() {
        this.detectRetina = false;
        this.emitters = [];
        this.fpsLimit = 30;
        this.interactivity = new Interactivity();
        this.particles = new Particles();
        this.polygon = new PolygonMask();
        this.backgroundMask = new BackgroundMask();
        this.pauseOnBlur = true;
        this.background = new Background();
    }
    get fps_limit() {
        return this.fpsLimit;
    }
    set fps_limit(value) {
        this.fpsLimit = value;
    }
    get retina_detect() {
        return this.detectRetina;
    }
    set retina_detect(value) {
        this.detectRetina = value;
    }
    load(data) {
        var _a, _b;
        if (data !== undefined) {
            if (data.preset !== undefined) {
                if (data.preset instanceof Array) {
                    for (const preset of data.preset) {
                        this.importPreset(preset);
                    }
                }
                else {
                    this.importPreset(data.preset);
                }
            }
            if (data.background !== undefined) {
                this.background.load(data.background);
            }
            const detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;
            if (detectRetina !== undefined) {
                this.detectRetina = detectRetina;
            }
            const fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;
            if (fpsLimit !== undefined) {
                this.fpsLimit = fpsLimit;
            }
            if (data.pauseOnBlur !== undefined) {
                this.pauseOnBlur = data.pauseOnBlur;
            }
            this.particles.load(data.particles);
            this.interactivity.load(data.interactivity, this.particles);
            this.polygon.load(data.polygon);
            this.backgroundMask.load(data.backgroundMask);
            if (data.emitters !== undefined) {
                if (data.emitters instanceof Array) {
                    this.emitters = data.emitters.map((s) => {
                        const tmp = new Emitter();
                        tmp.load(s, this.particles);
                        return tmp;
                    });
                }
                else {
                    if (this.emitters instanceof Array) {
                        this.emitters = new Emitter();
                    }
                    this.emitters.load(data.emitters, this.particles);
                }
            }
        }
    }
    importPreset(preset) {
        const presetOptions = Presets.getPreset(preset);
        if (presetOptions !== undefined) {
            this.load(presetOptions);
        }
    }
}
