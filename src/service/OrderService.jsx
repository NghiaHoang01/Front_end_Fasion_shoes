import queryString from "query-string"
import request from "utils/Request"

// get orders of user
export const getOrdersSerivce = (params) => {
    return request(`/api/user/orders/detail?${queryString.stringify(params)}`, {
        method: 'GET'
    })
}

// cancel order
export const cancelOrderService = (id) => {
    return request(`api/user/order?id=${id}`, {
        method: 'DELETE'
    })
}

// update pay of order vnpay
export const updatePayOfOrderVNPayService = (params) => {
    return request(`/api/user/order/pay?${queryString.stringify(params)}`, {
        method: 'PUT',
        data: params
    })
}

// get VNPay response
export const getVNPayInformationService = (id) => {
    return request(`/api/user/vnpay/information?orderId=${id}`, {
        method: 'GET'
    })
}