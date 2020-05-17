class BaseController {

    constructor() {
        this.user = {controllerName: "base123"}
        this.init()  
    }

    init() {
        
    }
    getUser() {
        return {"test": "test"}
    }
    apiSuccess(data = {}, message = '', code = 200) {
        return {
            code: code,
            message: message,
            data: data,
        }
    }
}
    
const BaseCaseController = {
    constructor: function () {
        this.init()
    },
    init: function () {
        
    }
}

module.exports = BaseController