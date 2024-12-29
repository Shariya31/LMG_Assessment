import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        list: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.list.push(action.payload)
        },

        updateProduct: (state, action) => {
            const index = state.list.findIndex(
                (product) => product.id === action.payload.id
            );
            if (index >= 0) {
                state.list[index] = action.payload;
            }
        },
        deleteProduct: (state, action)=>{
            state.list = state.list.filter((product)=> product.id !== action.payload)
        }
    }
})

export const {addProduct, updateProduct, deleteProduct} = productSlice.actions
export default productSlice.reducer