import { Particle } from "./Particle";
import { PolygonMaskType } from "../Enums/PolygonMaskType";
import { PolygonMaskInlineArrangement } from "../Enums/PolygonMaskInlineArrangement";
import { InteractionManager } from "./Particle/InteractionManager";
import { SpatialGrid } from "./Utils/SpatialGrid";
export class Particles {
    constructor(container) {
        this.container = container;
        this.array = [];
        this.interactionsEnabled = false;
        this.spatialGrid = new SpatialGrid(this.container.canvas.dimension);
    }
    get count() {
        return this.array.length;
    }
    init() {
        const container = this.container;
        const options = container.options;
        if (options.polygon.enable && options.polygon.type === PolygonMaskType.inline &&
            (options.polygon.inline.arrangement === PolygonMaskInlineArrangement.onePerPoint ||
                options.polygon.inline.arrangement === PolygonMaskInlineArrangement.perPoint)) {
            container.polygon.drawPointsOnPolygonPath();
        }
        else {
            for (let i = this.array.length; i < options.particles.number.value; i++) {
                this.addParticle(new Particle(container));
            }
        }
        this.interactionsEnabled = options.particles.lineLinked.enable ||
            options.particles.move.attract.enable ||
            options.particles.move.collisions;
    }
    redraw() {
        this.clear();
        this.init();
        this.draw(0);
    }
    removeAt(index, quantity) {
        if (index >= 0 && index <= this.count) {
            for (const particle of this.array.splice(index, quantity !== null && quantity !== void 0 ? quantity : 1)) {
                particle.destroy();
            }
        }
    }
    remove(particle) {
        this.removeAt(this.array.indexOf(particle));
    }
    update(delta) {
        for (let i = 0; i < this.array.length; i++) {
            const p = this.array[i];
            p.update(i, delta);
            if (this.interactionsEnabled) {
                InteractionManager.interact(p, this.container);
            }
        }
    }
    draw(delta) {
        const container = this.container;
        const options = container.options;
        container.canvas.clear();
        this.update(delta);
        this.spatialGrid.setGrid(this.array, this.container.canvas.dimension);
        if (options.polygon.enable && options.polygon.draw.enable) {
            container.polygon.drawPolygon();
        }
        for (const p of this.array) {
            p.draw();
        }
    }
    clear() {
        this.array = [];
    }
    push(nb, mousePosition) {
        var _a;
        const container = this.container;
        const options = container.options;
        this.pushing = true;
        if (options.particles.number.limit > 0) {
            if ((this.array.length + nb) > options.particles.number.limit) {
                this.removeQuantity((this.array.length + nb) - options.particles.number.limit);
            }
        }
        let pos;
        if (mousePosition) {
            pos = (_a = mousePosition.position) !== null && _a !== void 0 ? _a : { x: 0, y: 0 };
        }
        for (let i = 0; i < nb; i++) {
            this.addParticle(new Particle(container, pos));
        }
        if (!options.particles.move.enable) {
            this.container.play();
        }
        this.pushing = false;
    }
    addParticle(particle) {
        this.array.push(particle);
    }
    removeQuantity(quantity) {
        const container = this.container;
        const options = container.options;
        this.removeAt(0, quantity);
        if (!options.particles.move.enable) {
            this.container.play();
        }
    }
}
