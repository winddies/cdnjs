export class SquareDrawer {
    draw(context, particle, radius, opacity) {
        context.rect(-radius, -radius, radius * 2, radius * 2);
    }
}
