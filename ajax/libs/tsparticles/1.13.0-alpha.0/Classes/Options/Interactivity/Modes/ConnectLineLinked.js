export class ConnectLineLinked {
    constructor() {
        this.opacity = 0.5;
    }
    load(data) {
        if (data !== undefined) {
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    }
}
