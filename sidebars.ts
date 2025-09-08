import type {SidebarsConfig} from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
    // 容器中间件
    ContainersAndMiddleware: [
        'containersAndMiddleware',
        {
            type: 'category',
            label: 'Docker',
            link: {
                type: 'generated-index',
                description:
                    "关于容器Docker命令相关学习",
                keywords: ['docker'],
            },
            items: [
                'docker/dockerBottom',
                'docker/dockerInstall',
                'docker/dockerImages',
                'docker/dockerNetwork',
                {
                    type: 'category',
                    label: 'Docker容器',
                    items: [
                        'docker/Docker容器/dockerRun',
                        'docker/Docker容器/dockerBackRun',
                        'docker/Docker容器/dockerCopyAndExport',
                        {
                            type: 'category',
                            label: 'Docke容器卷',
                            items: [
                                'docker/Docker容器/Docker数据卷/dockerVolum',
                                'docker/Docker容器/Docker数据卷/dockerMysql',
                            ],
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Docker部署微服务',
                    link: {
                        type: 'generated-index',
                        description:
                            "从无到有，从JDK到MysSql-从中间件到各个网关再到各个服务！Docker部署微服务全流程",
                        keywords: ['docker'],
                    },
                    items: [
                        'docker/Docker部署微服务/dockerBuildJdk',
                        'docker/Docker部署微服务/dockerRunNacos',
                        'docker/Docker部署微服务/dockerRunRedis',
                        'docker/Docker部署微服务/dockerRunSpringCloud',
                        'docker/Docker部署微服务/dockerComposeRunSpringCloud'
                    ]
                }
            ],
        },
        {
            type: 'category',
            label: 'Redis',
            link: {
                type: 'generated-index',
                description:
                    "关于中间件Redis命令的相关学习",
                keywords: ['redis'],
            },
            items: [
                {
                    type: 'category',
                    label: 'Redis',
                    link: {
                        type: 'generated-index',
                        description:
                            "关于中间件Redis基础命令学习",
                        keywords: ['redis'],
                    },
                    items: [
                        'redis/基础命令/redisString',
                        'redis/基础命令/redisList',
                        'redis/基础命令/redisHash',
                        'redis/基础命令/redisSet',
                        'redis/基础命令/redisSortedSet'
                    ],
                },
            ],
        },
    ],
    // docusaurus配置
    GoDataBlog: [
        'GoDataBlog/NodeVersionMan',
        {
          type: 'category',
          label: 'Vue相关',
          link: {
            type: 'generated-index',
            title: 'Vue相关学习',
            description:
            `这些都是个人学习Vue的记录，如果有哪写文章能帮助你我很开心! vue是vue2。
             涉及到一些版:
                vue=@vue/cli 5.0.8+
                node=v20.15.0+
                npm=10.7.0
            `,
            keywords: ['vue'],
          },
          items: [
              'GoDataBlog/Vue/VueComponent',
              'GoDataBlog/Vue/VueSlot',
          ],
        }
    ],
    // 数据结构与算法
    DataStructuresAlgorithms: [
        {
            type: 'category',
            label: '数据结构',
            link: {
                type: 'doc',
                id: 'DataStructuresAlgorithms/数据结构/dataIntroduction',
            },
            items: [
                {
                    type: 'category',
                    label: '线性结构',
                    link: {
                        type: 'doc',
                        id: 'DataStructuresAlgorithms/数据结构/线性结构/linearStructure',
                    },
                    items: [
                        'DataStructuresAlgorithms/数据结构/线性结构/sortStructure',
                        'DataStructuresAlgorithms/数据结构/线性结构/nodeStructure',
                        'DataStructuresAlgorithms/数据结构/线性结构/stackStructure'
                    ]
                },

            ]
        },
        {
            type: 'category',
            label: '算法',
            link: {
                type: 'doc',
                id: 'DataStructuresAlgorithms/算法/algorithmsIntroduction'
            },
            items: [
                'DataStructuresAlgorithms/算法/algorithmsBinarySearch',
                {
                    type: 'category',
                    label: '十大排序',
                    link: {
                        type: 'doc',
                        id: 'DataStructuresAlgorithms/算法/tenSortInfo'
                    },
                    items: [
                        'DataStructuresAlgorithms/算法/十大排序/algorithmsBubbleSort',
                        'DataStructuresAlgorithms/算法/十大排序/algorithmsSelectSort',
                        'DataStructuresAlgorithms/算法/十大排序/algorithmsInsertSort',
                        'DataStructuresAlgorithms/算法/十大排序/algorithmsShellSort'
                    ]
                }
            ]
        },
        {
            type: 'category',
            label: '设计模式',
            link: {
                type: 'generated-index',
                description:
                    "关于设计模式的学习",
                keywords: ['设计模式'],
            },
            items: [
                {
                    type: 'category',
                    label: '创建型模式',
                    link: {
                        type: 'generated-index',
                        description:
                            "创建型模式关注点在于如何创建对象，对象的创建和使用相分离",
                        keywords: ['设计模式'],
                    },
                    items: [
                        'DataStructuresAlgorithms/设计模式/创建型模式/singLeton',
                    ]
                }
            ]
        }
    ],

    // 自动化测试
    Automation: [
        'Automation/automationWre',
        {
            type: 'category',
            label: 'jmeter',
            link: {
                type: 'doc',
                id: 'Automation/jmeter/jmeterIntroduce',
            },
            items: [
                {
                    type: 'category',
                    label: '简单层次',
                    link: {
                        type: 'doc',
                        id: 'Automation/jmeter/jmeterIntroduce',
                    },
                    items: [
                        'Automation/jmeter/简单层次/JmeterSSL',
                        'Automation/jmeter/简单层次/DirectMysql',
                        'Automation/jmeter/简单层次/ScriptRecording',
                        {
                            type: 'category',
                            label: '断言',
                            link: {
                                type: 'doc',
                                id: 'Automation/jmeter/简单层次/断言/Assertion',
                            },
                            items: [
                                'Automation/jmeter/简单层次/JmeterSSL',
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'selenium',
            link: {
                type: 'doc',
                id: 'Automation/selenium/seleniumIntroduce',
            },
            items: [
                {
                    type: 'category',
                    label: '元素定位法',
                    items: [
                        'Automation/selenium/元素定位法/ByElementId',
                    ],
                },
                'Automation/selenium/Handle',
            ],
        },

    ],
    Problem: [
        'problem/AlmaLinux',
    ]
}

module.exports = sidebars
