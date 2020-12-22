import { Action, createReducer, on } from '@ngrx/store';
import * as ShoppingActions from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';


export const shoppingReducerFeatureKey = 'shoppingReducer';

export type ShoppingState = Array<ShoppingItem>;

export const initialState: ShoppingState = [
  {
    id: 'cb2515de-3d16-47df-a143-804db637ae99',
    name: 'Diet Coke',
  }
];


export const shoppingReducer = createReducer(
  initialState,
  on(ShoppingActions.addShoppingItem,
    (state, action) => ([...state, action.payload])
  ),
  on(ShoppingActions.removeShoppingItem,
    (state, action) => state.filter(shoppingItem => shoppingItem.id !== action.id)
  ),
);

