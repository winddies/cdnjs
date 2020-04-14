import { Bubble } from "./Bubble";
import { Connect } from "./Connect";
import { Grab } from "./Grab";
import { Remove } from "./Remove";
import { Push } from "./Push";
import { Repulse } from "./Repulse";
import { Slow } from "./Slow";
import { Emitter } from "../../Emitters/Emitter";
export class Modes {
    constructor() {
        this.bubble = new Bubble();
        this.connect = new Connect();
        this.grab = new Grab();
        this.push = new Push();
        this.remove = new Remove();
        this.repulse = new Repulse();
        this.slow = new Slow();
        this.emitters = [];
    }
    load(data, particles) {
        if (data !== undefined) {
            this.bubble.load(data.bubble);
            this.connect.load(data.connect);
            this.grab.load(data.grab);
            this.push.load(data.push);
            this.remove.load(data.remove);
            this.repulse.load(data.repulse);
            this.slow.load(data.slow);
            if (data.emitters !== undefined && particles !== undefined) {
                if (data.emitters instanceof Array) {
                    this.emitters = data.emitters.map((s) => {
                        const tmp = new Emitter();
                        tmp.load(s, particles);
                        return tmp;
                    });
                }
                else {
                    if (this.emitters instanceof Array) {
                        this.emitters = new Emitter();
                    }
                    this.emitters.load(data.emitters, particles);
                }
            }
        }
    }
}
