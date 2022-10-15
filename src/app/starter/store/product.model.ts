export class Product {
    constructor(
        public id: number, 
        public name: string,
        public price: number, 
        public image_link: string, 
        public is_published: boolean
    ) {}
}