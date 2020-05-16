import UserController from '../controller/user'
import Router from 'koa-router'

const router = new Router()

router.get('/user/id/:id', async (ctx) => {
    ctx.body = ctx.request.query
})

router.get('/user/info', UserController.info)

/**
 * 列表接口 list index
 */
router.get('/user/list', UserController.index)

/**
 * 详情接口 detail info
 */
router.get('/user/detail', UserController.detail)

/**
 * 新增接口 create add
 */
router.post('/user/create', UserController.create)

/**
 * 更新接口 update edit
 */
router.put('/user/update', UserController.update)

/**
 * 删除接口 delete
 */
router.delete('/user/delete', UserController.delete)

export default router