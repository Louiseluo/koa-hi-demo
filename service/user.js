import UserModel from '../model/user'
import UserFromModel from '../model/userform'

/**
 * 用户服务
 */
class UserService {
    constructor() {

    }

    /**
     * 获取用户详情，以及对应的表单配置
     * 
     * @param {*} uid 
     */
    getEditInfo(uid = 1) {
        return {
            userInfo: UserModel.getInfo(uid),
            userFrom: UserFromModel.getInfo()
        }
    }

    /**
     * 获取用户详情
     * 
     * @param {*} uid 
     */
    getUserInfo(uid = 1) {
        return UserModel.getInfo(uid)
    }
}

export default new UserService()