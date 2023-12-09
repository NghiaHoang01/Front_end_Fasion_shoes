import request from "utils/Request"

// get orders of user
export const getOrdersSerivce = () => {
    return request('/api/user/orders/detail', {
        method: 'GET'
    })
}

// cancel order
export const cancelOrderService = (id) => {
    return request(`api/user/order?id=${id}`, {
        method: 'DELETE'
    })
}