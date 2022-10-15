import { Product } from "./product.model";
import * as ProductListActions from "./starter.actions";

export interface ProductListState {
    products: Product[];
    editedProduct: Product;
    editedProductIndex: number;
}

const initialState: ProductListState = {
    products: [new Product(1, "test", 1000, 'http://', false), new Product(2, "test2", 1000, 'http://', false)],
    editedProduct: <Product>{},
    editedProductIndex: -1,
};

export function productListReducer(
    state: ProductListState = initialState,
    action: ProductListActions.ProductListActions
): ProductListState{
    switch (action.type) {
        case ProductListActions.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case ProductListActions.ADD_PRODUCTS:
            return {
                ...state,
                products: [...state.products, ...action.payload],
            }
        case ProductListActions.UPDATE_PRODUCT:
            const product = state.products[state.editedProductIndex];
            const updatedProduct = {
                ...product,
                ...action.payload,
            };
            const updatedProducts = [...state.products];
            updatedProducts[state.editedProductIndex] = updatedProduct;
            return {
                ...state,
                products: updatedProducts,
                editedProduct: <Product>{},
                editedProductIndex: -1,
            };
        case ProductListActions.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((ig, igIndex) => {
                return igIndex !== state.editedProductIndex;
                }),
                editedProduct: <Product>{},
                editedProductIndex: -1,
            };
        case ProductListActions.START_EDIT:
            return {
                ...state,
                editedProductIndex: action.payload,
                editedProduct: { ...state.products[action.payload] },
            };
            case ProductListActions.STOP_EDIT:
            return {
                ...state,
                editedProduct: <Product>{},
                editedProductIndex: -1,
            };
        default:
            return state;
    }
}