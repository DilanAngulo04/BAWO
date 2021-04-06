import { Image } from "./image.model";

export class Product{
    constructor(public cod?: number,
        public nameProduc?: string,
        public priceProduct?: number,
        public nutritionalInfoProduct?: string,
        public descriptionProduct?: string,
        public imageProduct?: Image,
        public codCategory?: number){    

    }
}