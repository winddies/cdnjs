import type { IInteractivity } from "./Interactivity/IInteractivity";
import type { IParticles } from "./Particles/IParticles";
import type { IPolygonMask } from "./PolygonMask/IPolygonMask";
import type { IOptionLoader } from "./IOptionLoader";
import type { IBackgroundMask } from "./BackgroundMask/IBackgroundMask";
import type { IBackground } from "./Background/IBackground";
export interface IOptions extends IOptionLoader<IOptions> {
    fps_limit: number;
    fpsLimit: number;
    interactivity: IInteractivity;
    particles: IParticles;
    polygon: IPolygonMask;
    retina_detect: boolean;
    detectRetina: boolean;
    background: IBackground;
    backgroundMask: IBackgroundMask;
    pauseOnBlur: boolean;
    preset?: string | string[];
}
