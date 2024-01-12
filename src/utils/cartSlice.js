import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[]
    },
    // It has multiple reducers that's why it was called as reducers
    reducers: {
        addItem: (state,action) => {
            // Vanilla(older) Redux ==> Don't and never Mutate State and returning was mandatory

            /* const newState = [...state];
            newState.items.push(action.payload);
            return newState */

            // Redux Toolkit
            // We HAVE to mutate the state here
            // Now redux library is using immer library to mutate the state

            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state,action) => {
            //We should not do like this
            /* state=[]; */
           // RTK - either mutate the exsisting state or return a new state
            // state.items.length = 0;  or 
            return {items: []} //- this new[] will be replaced inside originalState=[]
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;