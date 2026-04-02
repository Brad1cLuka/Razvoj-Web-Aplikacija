import { createReducer, on } from "@ngrx/store";
import { initialCartState, CartState } from "./cart.state";
import * as CartActions from './cart.actions';

export const cartReducer = createReducer(
    initialCartState,
    on(CartActions.addProduct, (state, {product}) => {

        const existingItem=state.items.find(i=> i.product.id === product.id);

        if(existingItem){
            return {
                ...state,
                items: state.items.map(i=>
                    i.product.id === product.id
                        ? {...i, quantity: i.quantity + 1}
                        : i
                )
            };
        }
        return {
            ...state,
            items: [...state.items, {product,quantity: 1}]
        };
    }),

    on(CartActions.removeProduct, (state, {productId}) => {
        const existingItem = state.items.find( i=> i.product.id === productId);

        if(!existingItem) return state;

        if(existingItem.quantity === 1){
            return{
                ...state,
                items: state.items.filter(i=> i.product.id !== productId)
            };
        }

        return {
            ...state,
            items: state.items.map( i=>
                i.product.id === productId
                    ? {...i, quantity: i.quantity -1}
                    : i
            )
        };
    })
    
      
);