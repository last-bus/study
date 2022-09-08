import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken(name = TokenKey) {
    return Cookies.get(name)
}

export function setToken(name: string, token: any, time: Date | undefined = undefined) {
    return Cookies.set(name, token, { expires: time })
}

export function removeToken(name = TokenKey) {
    return Cookies.remove(name)
}