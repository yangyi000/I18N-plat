
import express from 'express'

const routers = express.Router();

routers.get('/', (req, res, next) => {
    res.send('hello world!');
    next();
})

export default routers