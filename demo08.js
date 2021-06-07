/*
 * @Descripttion: 模板引擎使用
 * @Date: 2021-06-07 11:21:19
 * @LastEditTime: 2021-06-07 11:30:54
 * @LastEditors: kiki
 * @Author: Kiki
 */
const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

// 加载模板引擎
app.use(views(path.join(__dirname, './page'), {
  extension: 'ejs'
}))

app.use( async ( ctx ) => {
  let title = 'hello koa2'
  await ctx.render('index', {
    title
  })
  await ctx.render('index', {
    title:'你好呀'
  })
})

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})