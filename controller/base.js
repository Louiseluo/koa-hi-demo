class BaseController {

    constructor() {
        this.user = {controllerName: "base"}
        this.init()  
    }

    init() {
        
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