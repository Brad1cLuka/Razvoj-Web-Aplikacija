import { createReducer, on } from "@ngrx/store";
import { initialCartState, CartState } from "./cart.state";
import * as CartActions from './cart.actions';

export const cartReducer = createReducer(
    initialCartState,
    on(CartActions.addProduct, (state, {product}) => ({
        ...state,
        products: [...state.products, product]
    })),
    on(CartActions.removeProduct, (state, {productId}) => ({
        ...state,
        products: state.products.filter(p => p.id !== productId)
    }))
)