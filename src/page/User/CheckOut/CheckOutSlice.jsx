import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { placeOrderCODService } from "service/CheckOutService"

const initialState = {
    isLoading: false,
    placeOrder: {},
    messageSuccess: ''
}

// place order COD
export const placeOrderCODAsync = createAsyncThunk("placeOrderCOD", async (params) => {
    const response = await placeOrderCODService(params)
    return response.data
})

export const checkout = createSlice({
    name: 'checkoutSlice',
    initialState,
    reducers: {
        notifiCheckOutSuccess: (state, action) => {
            state.messageSuccess = action.payload
        },
    },
    extraReducers: builder => {
        builder
            //place order COD
            .addCase(placeOrderCODAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(placeOrderCODAsync.fulfilled, (state, action) => {
                state.isLoading = false
                state.placeOrder = action.payload
            })

    }
})

export const { notifiCheckOutSuccess } = checkout.actions

export const checkOutSelector = state => state.checkout

export default checkout.reducer