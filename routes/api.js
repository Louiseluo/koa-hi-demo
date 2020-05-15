import Router from 'koa-router'
import UserController from '../controller/use'

const router = new Router()

router.get('/api/user/:id', async (ctx) => {
    ctx.body = ctx.url
    console.log('url',ctx.request.url)
    console.log('query',ctx.request.query)
    console.log('querystring',ctx.request.querystring)
    console.log('params',ctx.params)

})

router.get('/api/user/info',UserController.info)

export default router