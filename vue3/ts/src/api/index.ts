import request from '@/request/request'
import * as T from '@/publicType/publicType'

export default {
    GetLeftMenu(data: object | null = null) {
        return request.post('Home/GetLeftMenu', data)
    },
    Login(data: T.TypeLogin) {
        return request.post('Authentication/Login', data)
    },
    GetUserInfo(data: object | null = null) {
        return request.post('Home/GetUserInfo', data)
    },
    ModifyPassword(data: T.TypeModifyPassword) {
        return request.posts('System/User/ModifyPassword', data)
    },

}