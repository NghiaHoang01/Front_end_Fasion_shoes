import request from "utils/Request"

export const userLoginService = (params) => {
    return request('/api/account/user/login', {
        method: 'POST',
        data: params
    })
}