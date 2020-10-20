import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import Routers from './router'

class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.config()
    }
    private config() {
        //开启 cors
        this.app.use(cors())
        //支持  application/json类型 发送数据
        this.app.use(json());
        //支持 application/x-www-form-urlencoded 发送数据
        this.app.use(urlencoded({ extended: false }))
        //日志中间件
        this.app.use(morgan('dev'))
        // 引入路由
        this.app.use('/', Routers)
    }

}
export default new App().app