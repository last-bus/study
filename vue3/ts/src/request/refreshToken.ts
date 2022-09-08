import md5 from "js-md5";
import API from "@/api/appApi";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { encode, decode } from "js-base64";
import router from "@/router/index";
import { date } from '@/utils/index'

export function refreshToken() {
    if (getToken("username") && getToken("password")) {
        const username = decode(getToken("username") as string);
        const password = decode(getToken("password") as string);
        const data = {
            username: username,
            password: md5(password),
        };
        API.Login(data)
            .then((res) => {
                const inFifteenMinutes = new Date(date(
                    (new Date().getTime() + (1 * 60 * 60 * 1000) as any) as string
                ));
                setToken("token", (res as any).token, inFifteenMinutes);
                setToken("tokenTime", (new Date().getTime() as any) as string, inFifteenMinutes);
            })
            .catch((err) => { console.log(err) });
    }
}