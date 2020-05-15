class UserController {
    constructor() {
        this.info.bind(this)
    }

    async info(ctx) {
        ctx.body = 'info'
    }
}
    
export default new UserController()