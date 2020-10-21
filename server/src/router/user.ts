import express from 'express'
import user from '../model/user/user'

const routers = express.Router();

routers.post('/test', (req, res, next) => {
  res.send(`hello ${req.session.userinfo}!`);
  next();
})

routers.post('/login', (req, res, next) => {
  user.login({ username: req.body.username, password: req.body.password }).then((result) => {
    req.session.userinfo = req.body.username
    res.send(result);
    next();
  }).catch((err) => {
    // 登录失败
    res.send(err);
    next();
  })
})

routers.post('/register', (req, res, next) => {
  user.register(req.body).then(()=>{
    res.send({success:true,msg:``});
  }).catch(()=>{
    res.send({success:false,msg:``});
  })
})

export default routers