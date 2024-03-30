export default [
    {
        path: '/',
        component: '@/pages/index',
        name: '首页'
    },
    // {
    //     path: '/test',
    //     component: '@/pages/test/index',
    //     name: '测试'
    // },
    {
        path: '/stu',
        name: '学员管理',
        routes: [
            {
                path: '/stu/list',
                name: '学员列表',
                component: '@/pages/stu/list'
            },
            {
                path: '/stu/pub',
                name: '学员发布',
                component: '@/pages/stu/pub'
            }
        ]
    },
]