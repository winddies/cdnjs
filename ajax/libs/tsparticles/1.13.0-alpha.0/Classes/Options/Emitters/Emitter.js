import { MoveDirection } from "../../../Enums/MoveDirection";
import { Particles } from "../Particles/Particles";
import { EmitterRate } from "./EmitterRate";
import { EmitterLife } from "./EmitterLife";
export class Emitter {
    constructor() {
        this.direction = MoveDirection.none;
        this.life = new EmitterLife();
        this.rate = new EmitterRate();
    }
    load(data, particlesOptions) {
        if (data !== undefined) {
            if (data.size !== undefined) {
                this.size = {
                    width: data.size.width,
                    height: data.size.height,
                };
            }
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            this.life.load(data.life);
            if (data.particles !== undefined) {
                this.particles = new Particles();
                this.particles.load(data.particles);
            }
            this.rate.load(data.rate);
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
        }
    }
}
