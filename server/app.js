const Koa = require('koa')
const Router = require('koa-router')
const rest = require('./rest.js')
const app = new Koa()
const router = new Router()
const mapper = require('./mapper.js')
app.use(rest.restify())

router.get('/api/customer/detail',async (ctx,next)=>{
    let data = await mapper.getCustomerById(165)
    ctx.rest(data)
})
router.get('/api/customer/all',async (ctx,next)=>{
    let queryString = ctx.request.query
    let pageSize = parseInt(queryString.pageSize)
    let pageNum = parseInt(queryString.pageNum)
    
    let data = await mapper.getPage(pageSize,pageNum)
    ctx.rest(data)
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(8888)
console.log('server running at http://localhost:8888')