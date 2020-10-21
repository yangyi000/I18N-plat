import axios from 'axios';
axios.defaults.timeout = 5000;
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api/' : '/api/';

axios.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})

axios.interceptors.response.use(res => {
    return res.data
}, err => {
    return Promise.reject(err)
})

class Api {
    // Do all the http requist here
    constructor() {

    }

    public test(){
        return axios.post('test')
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