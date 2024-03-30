import mockjs from "mockjs"

export default {
    'GET /classes/test': {
        username: '张三',
        score: 100
    },
    'GET /classes/stu': mockjs.mock({
        code: 200,
        msg: '学员列表加载成功',
        'data|10': [
            {
                'id|+1': 1,
                name: '@cname',
                score: '@integer(60,100)',
                city: '@city',
                time: '@datetime',
            }
        ]
    })
}