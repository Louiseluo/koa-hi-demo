import Router from 'koa-router'

const router = new Router()

router.get('/login', async (ctx) => {
    ctx.body = `<h1> this is a web page </h1>`
})

export default router