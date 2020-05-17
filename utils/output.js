import config from '../config'
import jsontoxml from 'jsontoxml'

let Output = {
    /**
     * 响应格式
     * 
     * @param {*} data 
     * @param {*} message 
     * @param {*} code 
     */
    apiOutput: function (data = {}, message = 'success', code = 200) {
        let responseData = {
            code: code,
            message: message,
            data: data,
        }

        if (config.responseType === 'xml') {
            responseData = jsontoxml(responseData)
        }

        return responseData;
    },
    /**
     * 成功时格式
     * 
     * @param {*} data 
     * @param {*} message 
     * @param {*} code 
     */
    apiSuccess: function (data = {}, message = 'success', code = 200) {
        return this.apiOutput(data, message, code)
    },
    /**
     * 错误时格式
     * @param {*} message 
     * @param {*} code 
     * @param {*} data 
     */
    apiError: function name(message = 'error', code = 400, data = {}) {
        return this.apiOutput(data, message, code)
    }
}

export default Output