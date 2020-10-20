import app from './app'
// import mysql from 'mysql'
// TODO:启动校验数据库 or 访问校验数据库
const PORT=8080;

app.listen(PORT,()=>{
    console.log(`Express server listening on port ${PORT}`);
})