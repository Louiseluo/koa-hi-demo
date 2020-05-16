import Router from 'koa-router'

const router = new Router()

router.get('/login', async (ctx) => {
    ctx.body = `<h1> this is a page of admin login</h1>`
})

export default router