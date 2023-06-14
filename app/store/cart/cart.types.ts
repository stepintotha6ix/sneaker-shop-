import { ICartItem } from "types/cart.interface"


export interface ICartInitialState {
	items: ICartItem[]
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}


export type TypeSize = 35 |36| 37| 38| 39 | 40 | 41 | 42 | 43 | 44 | 45 


export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
	type: 'minus' | 'plus'
}


