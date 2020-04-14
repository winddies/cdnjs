export class LineDrawer {
    draw(context, particle, radius, opacity) {
        context.moveTo(0, -radius / 2);
        context.lineTo(0, radius / 2);
    }
}
