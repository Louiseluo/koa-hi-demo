import BaseController from './base'

class UserController extends BaseController {

    init() {
        this.info.bind(this)
    }

    async info(ctx) {
        ctx.body = 'info'
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
        ctx.body = 'create'
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