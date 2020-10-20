import axios from 'axios';
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:8080/api/';// TODO:配置环境变量更改baseURL

axios.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})

axios.interceptors.response.use(res => {
    return res
}, err => {
    return Promise.reject(err)
})

class Api {
    // Do all the http requist here
    constructor() {

    }

    /**
     * 登录
     * @param data {username:string,password:string}
     */
    public login(data: { username: string, password: string }) {
        return axios.post('login', data)
    }

    /**
     * 注册
     * @param data {username:string,password:string}
     */
    public register(data: { username: string, password: string }) {
        return axios.post('register', data)
    }
}

export default new Api()