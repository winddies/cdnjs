import type { IAbsorberSize } from "../../../Interfaces/Options/Absorbers/IAbsorberSize";
import type { IAbsorberRandomSize } from "../../../Interfaces/Options/Absorbers/IAbsorberRandomSize";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
export declare class AbsorberSize implements IAbsorberSize {
    random: IAbsorberRandomSize;
    value: number;
    limit?: number;
    constructor();
    load(data?: RecursivePartial<IAbsorberSize>): void;
}
