/*
 * @Descripttion:路由中间件
 * @Date: 2021-06-04 17:43:05
 * @LastEditTime: 2021-06-07 10:52:21
 * @LastEditors: kiki
 * @Author: Kiki
 */
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', function (ctx, next) {
  ctx.body = 'Hello tyy'
})
.get('/todo',(ctx,next)=>{
    ctx.body="Todo page"
});
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
  console.log('starting at port 3000')
})
