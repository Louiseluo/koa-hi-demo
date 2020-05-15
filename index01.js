import Koa from "koa"

const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello World s'
});

app.listen(3000)

console.log('run on 3000 port')
