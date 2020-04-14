import { Particles } from "../Particles";
export class ShapeBase {
    constructor() {
        this.fill = true;
        this.close = true;
    }
    load(data, particlesOptions) {
        if (data !== undefined) {
            if (data.fill !== undefined) {
                this.fill = data.fill;
            }
            if (data.particles !== undefined) {
                this.particles = new Particles();
                this.particles.load(data.particles);
            }
        }
    }
}
