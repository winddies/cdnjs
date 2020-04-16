"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("./Utils");
var SpatialGrid = (function () {
    function SpatialGrid(canvas) {
        this.grid = [];
        this.cellSize = 5;
        this.widthSegment = Math.round(canvas.width / this.cellSize);
        this.heightSegment = Math.round(canvas.height / this.cellSize);
    }
    SpatialGrid.prototype.setGrid = function (particles, dimesion) {
        var grid = [];
        var widthSegment = (dimesion === null || dimesion === void 0 ? void 0 : dimesion.width) ? (dimesion === null || dimesion === void 0 ? void 0 : dimesion.width) / this.cellSize : this.widthSegment;
        var heightSegment = (dimesion === null || dimesion === void 0 ? void 0 : dimesion.height) ? (dimesion === null || dimesion === void 0 ? void 0 : dimesion.height) / this.cellSize : this.heightSegment;
        for (var i = 0; i < particles.length; i++) {
            var pos = this.index(particles[i].position);
            if (!Array.isArray(grid[pos.x]))
                grid[pos.x] = [];
            if (!Array.isArray(grid[pos.x][pos.y]))
                grid[pos.x][pos.y] = [];
            grid[pos.x][pos.y].push(particles[i]);
        }
        this.widthSegment = widthSegment;
        this.heightSegment = heightSegment;
        this.grid = grid;
    };
    SpatialGrid.prototype.queryInCell = function (position) {
        var pos = this.index(position);
        if (Array.isArray(this.grid[pos.x]) && Array.isArray(this.grid[pos.x][pos.y]))
            return this.grid[pos.x][pos.y] || [];
        else
            return [];
    };
    SpatialGrid.prototype.queryRadius = function (position, radius) {
        var pos = this.index(position);
        var rad = this.radius({ x: radius, y: radius });
        var items = this.select(this.indexOp(pos, '-', rad), this.indexOp(pos, '+', rad));
        var out = [];
        for (var i = 0; i < items.length; i++) {
            if (items[i] && Utils_1.Utils.getDistanceBetweenCoordinates(items[i].position, position) <= radius)
                out[out.length + 1] = items[i];
        }
        return out;
    };
    SpatialGrid.prototype.queryRadiusWithDist = function (position, radius) {
        var pos = this.index(position);
        var rad = this.radius({ x: radius, y: radius });
        var items = this.select(this.indexOp(pos, '-', rad), this.indexOp(pos, '+', rad));
        var out = [];
        for (var i = 0; i < items.length; i++) {
            if (items[i]) {
                var dist = Utils_1.Utils.getDistanceBetweenCoordinates(items[i].position, position);
                if (dist <= radius)
                    out.push({ dist: dist, particle: items[i] });
            }
        }
        return out;
    };
    SpatialGrid.prototype.select = function (start, end) {
        var out = [];
        for (var x = start.x; x <= end.x; x++) {
            if (!Array.isArray(this.grid[x]))
                continue;
            for (var y = start.y; y <= end.y; y++) {
                if (!Array.isArray(this.grid[x][y]))
                    continue;
                for (var i = 0; i < this.grid[x][y].length; i++)
                    if (this.grid[x][y][i] != null)
                        out[out.length + 1] = this.grid[x][y][i];
            }
        }
        return out;
    };
    SpatialGrid.prototype.index = function (position) {
        return {
            x: Math.round(position.x / this.widthSegment),
            y: Math.round(position.y / this.heightSegment)
        };
    };
    SpatialGrid.prototype.radius = function (radius) {
        return {
            x: Math.ceil(radius.x / this.widthSegment),
            y: Math.ceil(radius.y / this.heightSegment)
        };
    };
    SpatialGrid.prototype.indexOp = function (left, op, right) {
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
    };
    SpatialGrid.prototype.clamp = function (num) {
        return Utils_1.Utils.clamp(num, 0, this.cellSize);
    };
    return SpatialGrid;
}());
exports.SpatialGrid = SpatialGrid;
