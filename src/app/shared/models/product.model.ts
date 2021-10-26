import { Floor } from "./floor.model";
import { Section } from "./section.model";

export type Product = {
    code: string;
    section: {
        id: string;
        number: number;
    };
    floor: {
        id: string;
        number: number;
    }
    quantity: number;
}
