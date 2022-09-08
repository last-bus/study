import axios from 'axios';
import { TypeMethods } from '@/publicType/publicType'

//对外接口
class Request {

    get(url: string, params: any = null) {
        return this.methods('get', url, { params: params }, null, null)
    }

    post(url: string, params: any | null = null, time: number | null = null) {
        const headerConfig = {
            'Content-Type': 'application/json',
        }
        return this.methods('post', url, JSON.stringify(params), headerConfig, time)
    }

    posts(url: string, params: any = null) {

        if (JSON.stringify(params) !== "{}" && params !== null) {
            url = url + "?"
            for (const key in params) {

                url = url + key + "=" + params[key] + "&"
            }
            url = url.substring(0, url.length - 1);
        }
        const headerConfig = {
            'Content-Type': 'application/json',
        }
        return this.methods('post', url, null, headerConfig, null)
    }

    methods(method: TypeMethods, url: string, params: any = null, headerConfig: any = null, time: number | null = null) {
        return new Promise((resolve, reject) => {
            axios[method](url, params, { headers: headerConfig, timeout: time ? time : 5000 }).then((res: any) => {
                resolve(res)
            }).catch((err: any) => {
                reject(err)
            })
        });
    }
}

export default new Request()