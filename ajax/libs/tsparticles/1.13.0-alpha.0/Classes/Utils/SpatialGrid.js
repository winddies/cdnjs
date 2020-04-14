import { Utils } from "./Utils";
export class SpatialGrid {
    constructor(canvas) {
        this.grid = [];
        this.cellSize = 5;
        this.widthSegment = Math.round(canvas.width / this.cellSize);
        this.heightSegment = Math.round(canvas.height / this.cellSize);
    }
    setGrid(particles, dimesion) {
        const grid = [];
        const widthSegment = (dimesion === null || dimesion === void 0 ? void 0 : dimesion.width) ? (dimesion === null || dimesion === void 0 ? void 0 : dimesion.width) / this.cellSize : this.widthSegment;
        const heightSegment = (dimesion === null || dimesion === void 0 ? void 0 : dimesion.height) ? (dimesion === null || dimesion === void 0 ? void 0 : dimesion.height) / this.cellSize : this.heightSegment;
        for (let i = 0; i < particles.length; i++) {
            const pos = this.index(particles[i].position);
            if (!Array.isArray(grid[pos.x]))
                grid[pos.x] = [];
            if (!Array.isArray(grid[pos.x][pos.y]))
                grid[pos.x][pos.y] = [];
            grid[pos.x][pos.y].push(particles[i]);
        }
        this.widthSegment = widthSegment;
        this.heightSegment = heightSegment;
        this.grid = grid;
    }
    queryInCell(position) {
        const pos = this.index(position);
        if (Array.isArray(this.grid[pos.x]) && Array.isArray(this.grid[pos.x][pos.y]))
            return this.grid[pos.x][pos.y] || [];
        else
            return [];
    }
    queryRadius(position, radius) {
        const pos = this.index(position);
        const rad = this.radius({ x: radius, y: radius });
        const items = this.select(this.indexOp(pos, '-', rad), this.indexOp(pos, '+', rad));
        let out = [];
        for (let i = 0; i < items.length; i++) {
            if (items[i] && Utils.getDistanceBetweenCoordinates(items[i].position, position) <= radius)
                out[out.length + 1] = items[i];
        }
        return out;
    }
    queryRadiusWithDist(position, radius) {
        const pos = this.index(position);
        const rad = this.radius({ x: radius, y: radius });
        const items = this.select(this.indexOp(pos, '-', rad), this.indexOp(pos, '+', rad));
        let out = [];
        for (let i = 0; i < items.length; i++) {
            if (items[i]) {
                const dist = Utils.getDistanceBetweenCoordinates(items[i].position, position);
                if (dist <= radius)
                    out.push({ dist: dist, particle: items[i] });
            }
        }
        return out;
    }
    select(start, end) {
        let out = [];
        for (let x = start.x; x <= end.x; x++) {
            if (!Array.isArray(this.grid[x]))
                continue;
            for (let y = start.y; y <= end.y; y++) {
                if (!Array.isArray(this.grid[x][y]))
                    continue;
                for (let i = 0; i < this.grid[x][y].length; i++)
                    if (this.grid[x][y][i] != null)
                        out[out.length + 1] = this.grid[x][y][i];
            }
        }
        return out;
    }
    index(position) {
        return {
            x: Math.round(position.x / this.widthSegment),
            y: Math.round(position.y / this.heightSegment)
        };
    }
    radius(radius) {
        return {
            x: Math.ceil(radius.x / this.widthSegment),
            y: Math.ceil(radius.y / this.heightSegment)
        };
    }
    indexOp(left, op, right) {
        if (op == '+')
            return {
                x: this.clamp(left.x + right.x),
                y: this.clamp(left.y + right.y)
            };
        else
            return {
                x: this.clamp(left.x - right.x),
                y: this.clamp(left.y - right.y)
            };
    }
    clamp(num) {
        return Utils.clamp(num, 0, this.cellSize);
    }
}
