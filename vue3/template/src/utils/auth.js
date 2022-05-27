import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken(name = '') {
    return Cookies.get(name ? name : TokenKey)
}

export function setToken(name, token, time = null) {
    return Cookies.set(name, token, { expires: time })
}

export function removeToken(name) {
    return Cookies.remove(name ? name : TokenKey)
}