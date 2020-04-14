import { Utils } from "../Utils/Utils";
export class TextDrawer {
    draw(context, particle, radius, opacity) {
        const character = particle.shapeData;
        if (character === undefined) {
            return;
        }
        const textData = character.value;
        if (textData === undefined) {
            return;
        }
        const textParticle = particle;
        if (textParticle.text === undefined) {
            if (textData instanceof Array) {
                textParticle.text = Utils.itemFromArray(textData, particle.randomIndexData);
            }
            else {
                textParticle.text = textData;
            }
        }
        const text = textParticle.text;
        const style = character.style;
        const weight = character.weight;
        const size = Math.round(radius) * 2;
        const font = character.font;
        const fill = particle.fill;
        context.font = `${style} ${weight} ${size}px "${font}"`;
        const pos = {
            x: -radius / 2,
            y: radius / 2,
        };
        if (fill) {
            context.fillText(text, pos.x, pos.y);
        }
        else {
            context.strokeText(text, pos.x, pos.y);
        }
    }
}
