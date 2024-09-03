import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

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
        {
          type: 'category',
          label: 'Docker容器',
          items:[
              'docker/Docker容器/dockerRun',
              'docker/Docker容器/dockerBackRun',
              'docker/Docker容器/dockerCopyAndExport',
            {
              type: 'category',
              label: 'Docke容器卷',
              items:[
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
          items:[
            'docker/Docker部署微服务/dockerBuildJdk',
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
        'redis/redisString'],
    },
  ],
  // docusaurus配置
  Docusaurus: [
    {
      type: 'category',
      label: 'Docusaurus配置',
      link: {
        type: 'generated-index',
        title: 'Docusaurus 配置',
        description:
            "这篇文章是关于Hare配置Docusaurus时，总结后的相关配置希望能帮助到你",
        keywords: ['docusaurus'],
      },
      items: ['docusaurus/sidebar', 'docusaurus/comment'],
    },
  ],
}

module.exports = sidebars
