import { ActionReducerMap } from "@ngrx/store";
import * as fromProductList from "../starter/store/starter.reducer";

export interface AppState {
    products: fromProductList.ProductListState;
}

export const selectAllProducts = (state: AppState) => state.products;

export const appReducer: ActionReducerMap<AppState, any> = {
    products: fromProductList.productListReducer
};

