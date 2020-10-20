
import express from 'express'

const routers = express.Router();

routers.get('/', (req, res, next) => {
    res.send('hello world!');
    next();
})

routers.post('/login', (req, res, next) => {
    console.log(req.body)
    res.send('hello world!');
    next();
})

routers.post('/register', (req, res, next) => {
    console.log(req.body)
    res.send('hello world!');
    next();
})

export default routers