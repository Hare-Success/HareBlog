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
        'docker/dockerImages'
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
