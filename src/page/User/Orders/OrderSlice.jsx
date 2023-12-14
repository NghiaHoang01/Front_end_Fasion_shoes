import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { cancelOrderService, getOrdersSerivce, getVNPayInformationService, updatePayOfOrderVNPayService } from "service/OrderService"

const initialState = {
    isLoading: false,
    isloadListOrders: false,
    listOrders: {},
    orderItem: {}
}

// place order COD
export const getOrdersAsync = createAsyncThunk("getOrders", async (params) => {
    const response = await getOrdersSerivce(params)
    return response.data
})

// cancel order
export const cancelOrdersAsync = createAsyncThunk("cancelOrder", async (id) => {
    const response = await cancelOrderService(id)
    return response.data
})

// update pay of order vnpay
export const updatePayOfOrderVNPayAsync = createAsyncThunk("updatePayOfOrderVNPay", async (params) => {
    const response = await updatePayOfOrderVNPayService(params)
    return response.data
})

//get VNPay response
export const getVNPayResponseAsync = createAsyncThunk("getVNPayResponse", async (id) => {
    const response = await getVNPayInformationService(id)
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
                state.isloadListOrders = true
            })
            .addCase(getOrdersAsync.fulfilled, (state, action) => {
                state.isloadListOrders = false
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

            // update pay of order vnpay
            .addCase(updatePayOfOrderVNPayAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updatePayOfOrderVNPayAsync.fulfilled, (state) => {
                state.isLoading = false
            })

            //get VNPay response
            .addCase(getVNPayResponseAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getVNPayResponseAsync.fulfilled, (state) => {
                state.isLoading = false
            })
    }
})

export const orderSelector = state => state.order

export default order.reducer