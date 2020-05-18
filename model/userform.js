let UserFormModel = {
    getInfo() {
        return {
            sex: {
                type: 'radio',
                data: ['男', '女']
            },
            address: {
                type: 'input',
                data: '中国'
            }
        }
    }
}

export default UserFormModel