import request from "utils/Request"

// place order
export const placeOrderCODService = (params) => {
    return request('/api/user/place/order/cod', {
        method: 'POST',
        data: params
    })
}