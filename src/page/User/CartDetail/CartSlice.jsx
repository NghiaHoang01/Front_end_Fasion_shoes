import { createSlice } from "@reduxjs/toolkit"

const cart = createSlice({
    name: 'cartSlice',
    initialState: {
        listCart: []
    },
    reducers: {
        saveListCart: (state, action) => {
            state.listCart = (action.payload)
        }
    }
})

const { reducer, actions } = cart
export const { saveListCart } = actions;

export default reducer