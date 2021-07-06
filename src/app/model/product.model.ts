import { category } from "./category.model";
import { Image } from "./image.model";

export class Product{
    constructor(public codigo?: number,
        public nombre?: string,
        public precio?: number,
        public informacionNutricional?: string,
        public descripcion?: string,
        public imagen?: Image,
        public categoria?: category){    
    }
}