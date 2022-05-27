import request from '@/request/request'
export default {
    GetLeftMenu(data) {
        return request.post('Home/GetLeftMenu', data)
    },
    Login(data) {
        return request.post('Authentication/Login', data)
    },
    GetUserInfo(data) {
        return request.post('Home/GetUserInfo', data)
    },
    ModifyPassword(data) {
        return request.posts('System/User/ModifyPassword', data)
    },

}