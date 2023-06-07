export interface IProduct {
    id: number;
    name: string;
    slug: string;
    price: number;
    type: string;
    images: string[]
    sizes: number[]
    code: string;
    brand: string;
}
export interface IProductDetails {
	product: IProduct
}
