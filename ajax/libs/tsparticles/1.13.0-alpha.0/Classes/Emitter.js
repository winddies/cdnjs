import { Particle } from "./Particle";
export class Emitter {
    constructor(container, emitterOptions, position) {
        var _a, _b, _c;
        this.container = container;
        this.initialPosition = position;
        this.emitterOptions = emitterOptions;
        this.position = (_a = this.initialPosition) !== null && _a !== void 0 ? _a : this.calcPosition();
        this.size = (_b = this.emitterOptions.size) !== null && _b !== void 0 ? _b : {
            height: 0,
            width: 0,
        };
        this.lifeCount = (_c = this.emitterOptions.life.count) !== null && _c !== void 0 ? _c : -1;
        this.start();
    }
    emit() {
        const container = this.container;
        const position = {
            x: this.position.x,
            y: this.position.y,
        };
        const offset = {
            x: container.canvas.dimension.height * this.size.width / 100,
            y: container.canvas.dimension.height * this.size.height / 100,
        };
        position.x += offset.x * (Math.random() - 0.5);
        position.y += offset.y * (Math.random() - 0.5);
        const particle = new Particle(container, position, this);
        for (let i = 0; i < this.emitterOptions.rate.quantity; i++) {
            container.particles.addParticle(particle);
        }
    }
    start() {
        if (this.lifeCount > 0 || !this.emitterOptions.life.count) {
            if (this.startInterval === undefined) {
                this.startInterval = setInterval(() => {
                    this.emit();
                }, 1000 * this.emitterOptions.rate.delay);
            }
            if (this.lifeCount > 0) {
                this.prepareToDie();
            }
        }
    }
    stop() {
        const interval = this.startInterval;
        if (interval !== undefined) {
            clearInterval(interval);
            delete this.startInterval;
        }
    }
    resize() {
        var _a;
        this.position = (_a = this.initialPosition) !== null && _a !== void 0 ? _a : this.calcPosition();
    }
    prepareToDie() {
        var _a;
        if (this.lifeCount > 0 && ((_a = this.emitterOptions.life) === null || _a === void 0 ? void 0 : _a.duration) !== undefined) {
            setTimeout(() => {
                var _a;
                this.stop();
                this.lifeCount--;
                if (this.lifeCount > 0) {
                    this.position = this.calcPosition();
                    setTimeout(() => {
                        this.start();
                    }, (_a = this.emitterOptions.life.delay) !== null && _a !== void 0 ? _a : 0);
                }
                else {
                    this.destroy();
                }
            }, this.emitterOptions.life.duration * 1000);
        }
    }
    destroy() {
        const container = this.container;
        const index = container.emitters.indexOf(this);
        if (index >= 0) {
            container.emitters.splice(index, 1);
        }
    }
    calcPosition() {
        var _a;
        const container = this.container;
        const percentPosition = (_a = this.emitterOptions.position) !== null && _a !== void 0 ? _a : {
            x: Math.random() * 100,
            y: Math.random() * 100,
        };
        return {
            x: percentPosition.x / 100 * container.canvas.dimension.width,
            y: percentPosition.y / 100 * container.canvas.dimension.height,
        };
    }
}
