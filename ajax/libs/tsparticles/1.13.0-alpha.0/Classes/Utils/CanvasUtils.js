import { ColorUtils } from "./ColorUtils";
export class CanvasUtils {
    static paintBase(context, dimension, baseColor) {
        context.save();
        context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
        context.fillRect(0, 0, dimension.width, dimension.height);
        context.restore();
    }
    static clear(context, dimension) {
        context.clearRect(0, 0, dimension.width, dimension.height);
    }
    static drawPolygonMask(context, rawData, stroke) {
        const color = typeof stroke.color === "string" ?
            ColorUtils.stringToRgb(stroke.color) :
            ColorUtils.colorToRgb(stroke.color);
        if (color) {
            context.save();
            context.beginPath();
            context.moveTo(rawData[0].x, rawData[0].y);
            for (let i = 1; i < rawData.length; i++) {
                context.lineTo(rawData[i].x, rawData[i].y);
            }
            context.closePath();
            context.strokeStyle = ColorUtils.getStyleFromColor(color);
            context.lineWidth = stroke.width;
            context.stroke();
            context.restore();
        }
    }
    static drawPolygonMaskPath(context, path, stroke, position) {
        context.save();
        context.translate(position.x, position.y);
        const color = typeof stroke.color === "string" ?
            ColorUtils.stringToRgb(stroke.color) :
            ColorUtils.colorToRgb(stroke.color);
        if (color) {
            context.strokeStyle = ColorUtils.getStyleFromColor(color, stroke.opacity);
            context.lineWidth = stroke.width;
            context.stroke(path);
        }
        context.restore();
    }
    static drawLineLinked(context, width, begin, end, backgroundMask, colorLine, opacity, shadow) {
        context.save();
        if (backgroundMask) {
            context.globalCompositeOperation = 'destination-out';
        }
        if (colorLine) {
            context.strokeStyle = ColorUtils.getStyleFromColor(colorLine, opacity);
        }
        context.lineWidth = width;
        context.beginPath();
        const color = typeof shadow.color === "string" ?
            ColorUtils.stringToRgb(shadow.color) :
            ColorUtils.colorToRgb(shadow.color);
        if (shadow.enable && color) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = ColorUtils.getStyleFromColor(color);
        }
        context.moveTo(begin.x, begin.y);
        context.lineTo(end.x, end.y);
        context.stroke();
        context.closePath();
        context.restore();
    }
    static drawConnectLine(context, width, lineStyle, begin, end) {
        context.save();
        context.beginPath();
        context.lineWidth = width;
        context.strokeStyle = lineStyle;
        context.moveTo(begin.x, begin.y);
        context.lineTo(end.x, end.y);
        context.stroke();
        context.closePath();
        context.restore();
    }
    static gradient(context, p1, p2, midColor, opacity) {
        const gradStop = Math.floor(p2.size.value / p1.size.value);
        if (!p1.color || !p2.color) {
            return;
        }
        const sourcePos = p1.position;
        const destPos = p2.position;
        const grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
        grad.addColorStop(0, ColorUtils.getStyleFromColor(p1.color, opacity));
        grad.addColorStop(gradStop > 1 ? 1 : gradStop, ColorUtils.getStyleFromColor(midColor, opacity));
        grad.addColorStop(1, ColorUtils.getStyleFromColor(p2.color, opacity));
        return grad;
    }
    static drawGrabLine(context, width, begin, end, colorLine, opacity) {
        context.save();
        context.strokeStyle = ColorUtils.getStyleFromColor(colorLine, opacity);
        context.lineWidth = width;
        context.beginPath();
        context.moveTo(begin.x, begin.y);
        context.lineTo(end.x, end.y);
        context.stroke();
        context.closePath();
        context.restore();
    }
    static drawParticle(context, particle, colorValue, backgroundMask, radius, opacity, shadow) {
        context.save();
        const shadowColor = particle.shadowColor;
        if (shadow.enable && shadowColor) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = ColorUtils.getStyleFromColor(shadowColor);
            context.shadowOffsetX = shadow.offset.x;
            context.shadowOffsetY = shadow.offset.y;
        }
        context.fillStyle = colorValue;
        const pos = {
            x: particle.position.x + particle.offset.x,
            y: particle.position.y + particle.offset.y,
        };
        context.translate(pos.x, pos.y);
        context.beginPath();
        if (particle.angle !== 0) {
            context.rotate(particle.angle * Math.PI / 180);
        }
        if (backgroundMask) {
            context.globalCompositeOperation = "destination-out";
        }
        const stroke = particle.stroke;
        if (stroke.width > 0 && particle.strokeColor) {
            context.strokeStyle = ColorUtils.getStyleFromColor(particle.strokeColor, particle.stroke.opacity);
            context.lineWidth = stroke.width;
        }
        this.drawShape(context, particle, radius, opacity);
        if (particle.close) {
            context.closePath();
        }
        if (stroke.width > 0 && particle.strokeColor) {
            context.stroke();
        }
        if (particle.fill) {
            context.fill();
        }
        context.restore();
    }
    static addShapeDrawer(type, drawer) {
        if (!this.drawers[type]) {
            this.drawers[type] = drawer;
        }
    }
    static drawShape(context, particle, radius, opacity) {
        if (!particle.shape) {
            return;
        }
        const drawer = this.drawers[particle.shape];
        if (!drawer) {
            return;
        }
        drawer.draw(context, particle, radius, opacity);
    }
}
CanvasUtils.drawers = {};
