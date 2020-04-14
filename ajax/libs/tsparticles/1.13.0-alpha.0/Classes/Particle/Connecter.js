export class Connecter {
    static connect(p1, p2, container) {
        const options = container.options;
        if (options.interactivity.events.onHover.enable && container.interactivity.status == 'mousemove') {
            const xDiff = Math.abs(p1.position.x - p2.position.x);
            const yDiff = Math.abs(p1.position.y - p2.position.y);
            const mousePos = container.interactivity.mouse.position || { x: 0, y: 0 };
            const xCoreDiff = Math.abs(p1.position.x - mousePos.x);
            const yCoreDiff = Math.abs(p1.position.y - mousePos.y);
            const distMax = Math.abs(container.retina.connectModeDistance);
            const connectAreaRadius = Math.abs(container.retina.connectModeRadius);
            if (xDiff < distMax && yDiff < distMax && xCoreDiff < connectAreaRadius && yCoreDiff < connectAreaRadius) {
                container.canvas.drawConnectLine(p1, p2);
            }
        }
    }
}
