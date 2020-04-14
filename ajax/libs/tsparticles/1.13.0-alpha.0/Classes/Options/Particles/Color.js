export class Color {
    constructor() {
        this.value = "#fff";
    }
    load(data) {
        if (data !== undefined) {
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    }
}
