import Koa from 'koa'
import router from './routes/api'

const app = new Koa();

app.use(router.routes(), router.allowedMethods())

app.listen(3002);

console.log('run 3002')