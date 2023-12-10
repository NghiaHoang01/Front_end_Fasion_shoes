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