module.exports = {
    configureWebpack:{
        devServer: {
            before(app) {
                app.get('/api/vue', function (req, res) {
                    res.json({
                        code: 0,
                        data: [
                            {
                                id: 1,
                                title: '第一',
                                count: '100',
                                img: '/img/1.jpg'
                            },
                            {
                                id: 2,
                                title: '第二',
                                count: '100',
                                img: '/img/2.jpg'
                            },
                            {
                                id: 3,
                                title: '第三',
                                count: '100',
                                img: '/img/3.jpg'
                            },
                            {
                                id: 4,
                                title: '第四',
                                count: '100',
                                img: '/img/4.jpg'
                            },
                            {
                                id: 5,
                                title: '第五',
                                count: '100',
                                img: '/img/4.jpg'
                            },
                            {
                                id: 6,
                                title: '第六',
                                count: '100',
                                img: '/img/4.jpg'
                            },
                            {
                                id: 7,
                                title: '第七',
                                count: '100',
                                img: '/img/4.jpg'
                            },
                            {
                                id: 8,
                                title: '第八',
                                count: '100',
                                img: '/img/4.jpg'
                            },
                            {
                                id: 9,
                                title: '第九',
                                count: '100',
                                img: '/img/4.jpg'
                            },{
                                id: 7,
                                title: '第七',
                                count: '100',
                                img: '/img/4.jpg'
                            },
                            {
                                id: 8,
                                title: '第八',
                                count: '100',
                                img: '/img/4.jpg'
                            },
                            {
                                id: 9,
                                title: '第九',
                                count: '100',
                                img: '/img/4.jpg'
                            }
                        ]
                    })
                })
            }
        }
    }
}
