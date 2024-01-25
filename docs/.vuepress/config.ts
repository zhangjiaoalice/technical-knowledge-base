import { defineUserConfig, defaultTheme } from 'vuepress';

export default defineUserConfig({
    lang: 'zh-CN',
    title: '前端知识库',
    description: '前端工程师必备的技术知识库',
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    theme: defaultTheme({
        logo: '/images/logo.png',
        sidebar: [
            {
                text: '目录',
                link: '/'
            },
            {
                text: '计算机网络',
                link: '/network/generate',
                children: [
                    {
                        text: '网络模型',
                        link: '/network/network-model'
                    }
                ]
            },
            {
                text: '浏览器工作原理',
                link: '/browser'
            },
            {
                text: '缓存策略',
                link: '/cache'
            },
            {
                text: '数据结构与算法',
                link: '/datastruct',
            },
            {
                text: 'HTML',
                link: '/html',
            },
            {
                text: 'CSS',
                link: '/css',
            },
            {
                text: 'javascript',
                link: '/js',
            },
            {
                text: 'Nodejs',
                link: '/node',
            },
            {
                text: 'v8',
                link: '/v8',
            },
            {
                text: 'vue',
                link: '/vue',
            },
            {
                text: 'react',
                link: '/react',
            },
            {
                text: 'SSR',
                link: '/ssr',
            },
            {
                text: 'H5 开发',
                link: '/h5'
            },
            {
                text: '微信小程序',
                link: '/miniprogrammer',
            },
            {
                text: 'uni-app',
                link: '/uni-app'
            },
            {
                text: '性能优化',
                link: '/preformance',
            },
            {
                text: '前端工程化',
                link: '/tool',
            },
            {
                text: '微前端',
                link: '/micro-web',
            },
            {
                text: '低代码平台',
                link: '/lower-code'
            },
            {
                text: 'Docker',
                link: '/docker',
            },
            {
                text: 'Linux 常用命令',
                link: '/linux-command'
            }
        ]
    })
})