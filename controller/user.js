import BaseController from './base' // controller 专门处理router接近的code，service 处理业务逻辑，model直接处理数据库数据 
import Output from '../utils/output'
import config from '../config'
import UserService from '../service/user' // 介于控制器与model层之间：业务逻辑抽离单独处理，抽出model，或是controller 臃肿业务逻辑
import userModel from '../model/user' // 直接的数据库数据入口

class UserController extends BaseController {

    /**
     * 
     * @param {import('koa').Context} ctx 
     */
    // 方法下参数自动补全
    async info(ctx) {
        // ctx.body = ctx.request.params
        // ctx.type = config.responseType
//         ctx.type = config.responseType
//         ctx.body = OutPut.apiSuccess({'username':'louise123'},'success',200)
        // ctx.body = userModel.getInfo(1)
//         ctx.body = userService.getUserInfo(10086)
        // ctx.body = Output.apiSuccess(UserService.getEditInfo(10101))
        ctx.body = ctx.request

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
        ctx.body = ctx.request.body
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