import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import Routers from './router'
import session from 'express-session'
import path from 'path'

class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.config();
    }
    private config() {
        this.app.set('view engine', 'html');
        //开启 cors
        this.app.use(cors())
        //支持  application/json类型 发送数据
        this.app.use(json());
        //支持 application/x-www-form-urlencoded 发送数据
        this.app.use(urlencoded({ extended: false }))
        //日志中间件
        this.app.use(morgan('dev'))

        this.app.use(express.static(path.join(__dirname, 'dist')));
        this.app.use(session({
            secret: 'ubtrobot',
            resave: true,
            saveUninitialized: true,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24   //有效期一天

            },
            // rolling: true
        }));
        //拦截器 TODO
        // this.app.use((req, res, next) => {
        //     if (!req.session.userinfo) {
        //         res.redirect('/');
        //     } else {
        //         next();
        //     }
        // })
        // 引入路由
        Routers.forEach((router) => {
            this.app.use('/api/', router)
        })
    }
}
export default new App().app