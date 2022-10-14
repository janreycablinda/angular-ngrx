import { Action } from "@ngrx/store";
import { Product } from "./product.model";

export const ADD_PRODUCT = "[Product List] Add Product";
export const ADD_PRODUCTS = "[Product List] Add Products";
export const UPDATE_PRODUCT = "[Product List] Update Product";
export const DELETE_PRODUCT = "[Product List] Delete Product";
export const START_EDIT = "[Product List] Start Product";
export const STOP_EDIT = "[Product List] Stop Product";

export class AddProduct implements Action {
    readonly type = ADD_PRODUCT;
  
    constructor(public payload: Product) {}
}

export class AddProducts implements Action {
    readonly type = ADD_PRODUCTS;
  
    constructor(public payload: Product[]) {}
}

export class UpdateProduct implements Action {
    readonly type = UPDATE_PRODUCT;
  
    constructor(public payload: Product) {}
}

export class DeleteProduct implements Action {
    readonly type = DELETE_PRODUCT;
}

export class StartEdit implements Action {
    readonly type = START_EDIT;
  
    constructor(public payload: number) {}
  }
  
  export class StopEdit implements Action {
    readonly type = STOP_EDIT;
  }

export type ProductListActions =
  | AddProduct
  | AddProducts
  | UpdateProduct
  | DeleteProduct
  | StartEdit
  | StopEdit;