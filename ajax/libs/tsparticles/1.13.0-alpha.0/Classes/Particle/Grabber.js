import { Utils } from "../Utils/Utils";
import { Constants } from "../Utils/Constants";
export class Grabber {
    static grab(particle, container) {
        const options = container.options;
        const interactivity = options.interactivity;
        if (interactivity.events.onHover.enable && container.interactivity.status === Constants.mouseMoveEvent) {
            const mousePos = container.interactivity.mouse.position || { x: 0, y: 0 };
            const distMouse = Utils.getDistanceBetweenCoordinates(particle.position, mousePos);
            if (distMouse <= container.retina.grabModeDistance) {
                const lineOpacity = interactivity.modes.grab.lineLinked.opacity;
                const grabDistance = container.retina.grabModeDistance;
                const opacityLine = lineOpacity - (distMouse * lineOpacity) / grabDistance;
                if (opacityLine > 0) {
                    container.canvas.drawGrabLine(particle, opacityLine, mousePos);
                }
            }
        }
    }
}
