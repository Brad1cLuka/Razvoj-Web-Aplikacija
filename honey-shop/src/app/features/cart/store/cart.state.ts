import { Product } from "../../../shared/models/product.model";

export interface CartState{
    products: Product[];
}

export const initialCartState: CartState = {
    products: []
};