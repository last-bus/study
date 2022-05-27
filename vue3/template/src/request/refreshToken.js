import md5 from "js-md5";
import API from "@/api/appApi";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { encode, decode } from "js-base64";
import router from "@/router/index";
import { date } from '@/utils/index'

export function refreshToken() {
    if (getToken("username") && getToken("password")) {
        let username = decode(getToken("username"));
        let password = decode(getToken("password"));
        let data = {
            username: username,
            password: md5(password),
        };
        API.Login(data)
            .then((res) => {
                var inFifteenMinutes = new Date(date(
                    new Date().getTime() + (1 * 60 * 60 * 1000)
                ));
                setToken("token", res.token, inFifteenMinutes);
                setToken("tokenTime", new Date().getTime(), inFifteenMinutes);
            })
            .catch((err) => {});
    }
}