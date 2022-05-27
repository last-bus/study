import axios from 'axios'
import { getToken, removeToken } from '@/utils/auth'
import { date } from '@/utils/index'
import router from '@/router/index'
import { ElMessage } from 'element-plus'
import { refreshToken } from '@/request/refreshToken'

// 设置默认的配置项
axios.defaults.baseURL = process.env.VUE_APP_BASE_API
axios.defaults.timeout = 5000;

//添加请求拦截器
axios.interceptors.request.use(function(config) {

    if (getToken('token')) {

        if (new Date().getTime() - getToken('tokenTime') > 10 * 60 * 1000 && config.url != 'Authentication/Login') {
            // 超过10分钟 重新请求一次token
            refreshToken()
        }
        config.headers['Authorization'] = 'Bearer ' + getToken('token')

    }
    return config

}, function(err) {
    //请求错误时做些事
    return Promise.reject(err)
});

//添加响应拦截器
axios.interceptors.response.use(function(response) {
    if (response.status === 200) {
        if (response.data.isSuccess) {

            return Promise.resolve(response.data.data)
        } else {
            if (response.data.Code == 'CACHE_TIMEOUT') {
                ElMessage({
                    showClose: true,
                    message: '请重新登录',
                    type: 'error',
                })
                removeToken()
                router.push('/login')
                return false
            } else {
                ElMessage({
                    showClose: true,
                    message: response.data.msg,
                    type: 'error',
                })
                return Promise.reject(response.data.msg)
            }

        }
    } else {
        ElMessage({
            showClose: true,
            message: '网络请求失败',
            type: 'error',
        })
        return Promise.reject('网络请求失败')

    }

}, function(error) {
    let err = JSON.parse(JSON.stringify(error))
    console.log(err)
    if (err.status === 401) {
        ElMessage({
            showClose: true,
            message: '请重新登录',
            type: 'error',
        })
        removeToken()
        router.push('/login')
        return false
    } else {
        ElMessage({
            showClose: true,
            message: '网络请求失败',
            type: 'error',
        })
    }

    return Promise.reject(error)
});