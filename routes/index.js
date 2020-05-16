import Router from 'koa-router'
import Api from './api'
import Web from './web'
import Admin from './admin'

const router = new Router()

router.use('/api',Api.routes(),Api.allowedMethods())
router.use('/web',Web.routes(),Web.allowedMethods())
router.use('/admin',Admin.routes(),Admin.allowedMethods())


export default router
