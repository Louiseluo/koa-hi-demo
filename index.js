import Koa from 'koa'
import router from './routes'

const app = new Koa();

app.use(router.routes(), router.allowedMethods())

app.on('error', (err, ctx) => {
    ctx.response.status = 200
    ctx.response.body = '404'

    console.log('err')
    console.error(err)

    console.log('ctx')
    console.error(ctx)
})
app.listen(3000);



console.log('run 3000')