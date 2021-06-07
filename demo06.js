/*
 * @Descripttion: 路由传参
 * @Date: 2021-06-07 10:52:57
 * @LastEditTime: 2021-06-07 10:55:30
 * @LastEditors: kiki
 * @Author: Kiki
 */
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
router.get('/', function (ctx, next) {
    ctx.body=ctx.query;
});
app
  .use(router.routes())
  .use(router.allowedMethods());
  app.listen(3000,()=>{
      console.log('starting at port 3000');
  });