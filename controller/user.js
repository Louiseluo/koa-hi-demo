import BaseController from './base'
import OutPut from '../utils/output'
import config from '../config'

class UserController extends BaseController {

    /**
     * 
     * @param {import('koa').Context} ctx 
     */
    // 方法下参数自动补全
    async info(ctx) {
        ctx.body = ctx.request.params
//         ctx.type = config.responseType
//         ctx.body = OutPut.apiSuccess({'username':'louise123'},'success',200)
    }

    async index(ctx) {
        ctx.type = 'json'
        ctx.body = [{name: 'Xiaolan'}, {name: 'Kenan'}]
    }

    async list(ctx) {
        ctx.type = 'json'
        ctx.body = [{name: 'Xiaolan'}, {name: 'Kenan'}]
    }

    async detail(ctx) {
        ctx.body = 'detail'
    }

    async create(ctx) {
        ctx.body = ctx.request.query
    }

    async update(ctx) {
        ctx.body = 'update'
    }

    async delete(ctx) {
        ctx.body = 'delete'
    }

    async destroy(ctx) {
        ctx.body = 'destroy'
    }
}

export default new UserController()