/*
 * @Descripttion: 
 * @Date: 2021-06-07 11:31:04
 * @LastEditTime: 2021-06-07 11:40:08
 * @LastEditors: kiki
 * @Author: Kiki
 */
const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()


const staticPath = './static/'

app.use(static(
  path.join( __dirname,  staticPath)
))


// app.use( async ( ctx ) => {
//   ctx.body = 'hello world'
// })

app.listen(3000, () => {
  console.log('[demo] static-use-middleware is starting at port 3000')
})