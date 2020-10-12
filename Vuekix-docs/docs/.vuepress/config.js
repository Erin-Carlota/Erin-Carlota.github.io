const path = require('path');
module.exports = {
    title: 'VueKix', // 设置网站标题
    description: '一套小巧的Vue组件库', //描述
    base:'/VueKix/',
    head: [
        ['link',
            { rel: 'icon', href: 'img/logo.png' }
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],
    ],
    themeConfig: { //主题配置
        logo: '/logo.png',  //网页顶端导航栏左上角的图标
        // repo: 'Erin-Carlota/VueKix',
        // 默认是 false, 设置为 true 来启用
        nav: [{
            text: '首页',
            link: '/'
        }, // 导航条
        { text: 'Github', link: 'https://github.com/Erin-Carlota' },
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/components/': [
                {
                    title: '快速上手',
                    collapsable: false,
                    children: [
                        'Guide.md'
                    ]
                },
                {
                    title: '组件',   // 一级菜单名称
                    collapsable: false,
                    children: [
                        'icon.md',
                        'basic.md',
                        'input.md',
                        'menu.md',
                        'spin.md',
                        'switch.md',
                        'tabs.md'
                    ]
                }
            ],
            // scss:{
            //     includePaths: [path.join(__dirname, '../../styles')]
            //   },
    

        }


    }
}