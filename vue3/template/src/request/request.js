import axios from 'axios';

//对外接口
class Request {
    constructor() {

    }

    get(url, params) {

        return this.methods('get', url, { params: params })
    }

    post(url, params, time = null) {
        let headerConfig = {
            'Content-Type': 'application/json',
        }
        return this.methods('post', url, JSON.stringify(params), headerConfig, time)
    }

    posts(url, params) {

        if (JSON.stringify(params) !== "{}" && params !== null) {
            url = url + "?"
            for (let key in params) {

                url = url + key + "=" + params[key] + "&"
            }
            url = url.substring(0, url.length - 1);
        }
        let headerConfig = {
            'Content-Type': 'application/json',
        }
        return this.methods('post', url, null, headerConfig)
    }

    methods(method, url, params = null, headerConfig = null, time = null) {
        return new Promise((resolve, reject) => {
            axios[method](url, params, { headers: headerConfig, timeout: time ? time : 5000 }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        });
    }
}

export default new Request()