import { Action, createReducer, on } from '@ngrx/store';
import * as ShoppingActions from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';


export const shoppingReducerFeatureKey = 'shoppingReducer';

export interface ShoppingState {
  content: Array<ShoppingItem>;
  loading: boolean;
  error: Error;
}

export const initialState: ShoppingState = {
  content: [],
  loading: false,
  error: undefined,
};


export const shoppingReducer = createReducer(
  initialState,
  on(ShoppingActions.loadShoppingItems,
    (state, action) => ({ ...state, loading: true })
  ),
  on(ShoppingActions.loadShoppingItemsSuccess,
    (state, action) => ({ ...state, content: action.payload, loading: false })
  ),
  on(ShoppingActions.loadShoppingItemsFailure,
    (state, action) => ({ ...state, error: action.payload, loading: false })
  ),
  on(ShoppingActions.addShoppingItem,
    (state, action) => ({ ...state, loading: true })
  ),
  on(ShoppingActions.addShoppingItemSuccess,
    (state, action) => ({ ...state, content: [...state.content, action.payload], loading: false })
  ),
  on(ShoppingActions.addShoppingItemFailure,
    (state, action) => ({ ...state, error: action.payload, loading: false })
  ),
  on(ShoppingActions.deleteShoppingItem,
    (state, action) => ({ ...state, loading: true })
  ),
  on(ShoppingActions.deleteShoppingItemSuccess,
    (state, action) => ({ ...state, content: action.payload, loading: false })
  ),
  on(ShoppingActions.deleteShoppingItemFailure,
    (state, action) => ({ ...state, error: action.payload, loading: false })
  ),
);

