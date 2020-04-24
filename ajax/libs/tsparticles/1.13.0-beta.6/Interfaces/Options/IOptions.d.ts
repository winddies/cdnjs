import type { IInteractivity } from "./Interactivity/IInteractivity";
import type { IParticles } from "./Particles/IParticles";
import type { IPolygonMask } from "./PolygonMask/IPolygonMask";
import type { IOptionLoader } from "./IOptionLoader";
import type { IBackgroundMask } from "./BackgroundMask/IBackgroundMask";
import type { IBackground } from "./Background/IBackground";
import type { SingleOrMultiple } from "../../Types/SingleOrMultiple";
import type { IEmitter } from "./Emitters/IEmitter";
import { IBlackHole } from "./BlackHoles/IBlackHole";
export interface IOptions extends IOptionLoader<IOptions> {
    background: IBackground;
    backgroundMask: IBackgroundMask;
    blackHoles: SingleOrMultiple<IBlackHole>;
    detectRetina: boolean;
    emitters: SingleOrMultiple<IEmitter>;
    fps_limit: number;
    fpsLimit: number;
    interactivity: IInteractivity;
    particles: IParticles;
    pauseOnBlur: boolean;
    polygon: IPolygonMask;
    preset?: string | string[];
    retina_detect: boolean;
}
