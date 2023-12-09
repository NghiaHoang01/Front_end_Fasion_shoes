import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { cancelOrderService, getOrdersSerivce } from "service/OrderService"

const initialState = {
    isLoading: false,
    listOrders: {},
    orderItem: {}
}

// place order COD
export const getOrdersAsync = createAsyncThunk("getOrders", async () => {
    const response = await getOrdersSerivce()
    return response.data
})

// cancel order
export const cancelOrdersAsync = createAsyncThunk("cancelOrder", async (id) => {
    const response = await cancelOrderService(id)
    return response.data
})

export const order = createSlice({
    name: 'orderSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            // get orders
            .addCase(getOrdersAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getOrdersAsync.fulfilled, (state, action) => {
                state.isLoading = false
                state.listOrders = action.payload
            })

            // cancel order
            .addCase(cancelOrdersAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(cancelOrdersAsync.fulfilled, (state, action) => {
                state.isLoading = false
                state.orderItem = action.payload
            })
    }
})

export const orderSelector = state => state.order

export default order.reducer