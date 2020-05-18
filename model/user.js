class UserModel {
    constructor() {

    }

    getInfo(uId = 0)
    {
        return {
            id: uId,
            name: 'KeNan',
            sex: '男'
        }
    }
}

export default new UserModel()