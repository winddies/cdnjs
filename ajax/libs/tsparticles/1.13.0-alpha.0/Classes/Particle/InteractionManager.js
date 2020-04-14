import { Linker } from "./Linker";
import { Attracter } from "./Attracter";
import { Collider } from "./Collider";
export class InteractionManager {
    static interact(p1, container) {
        if (p1.particlesOptions.lineLinked.enable) {
            Linker.link(p1, container);
        }
        if (p1.particlesOptions.move.attract.enable) {
            Attracter.attract(p1, container);
        }
        if (p1.particlesOptions.move.collisions) {
            Collider.collide(p1, container);
        }
    }
}
