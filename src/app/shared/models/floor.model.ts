import { Section } from "./section.model";

export type Floor = {
    id: string;
    number: number;
    name: string;
    sections: Section[];
}
