import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes } from 'prism-react-renderer'
import social from './data/social'
import type { GiscusConfig } from './src/components/Comment'

const beian = '闽ICP备2020017848号-2'
const beian1 = '闽公网安备35021102000847号'
const defaultLocale = 'en';
const config: Config = {
  title: 'Hare',
  url: 'https://note.hare-success.cn/',
  baseUrl: '/',
  favicon: 'img/HeadLogo.png',
  organizationName: 'Hare-Success',
  projectName: 'HareBlog',
  customFields: {
    bio: '道阻且长，行则将至',
    description:
      '是一个由Hare创建的个人博客，主要分享编程开发知识和项目，该网站基于 React 驱动的静态网站生成器 Docusaurus 构建。',
  },
  themeConfig: {
    image: 'img/og.png',
    // 元数据
    metadata: [
      {
        name: 'author',
        content: 'Hare',
      },
      {
        name: 'keywords',
        content: 'blog, javascript, typescript, node, react, vue, web,java,python,golang',
      },
      {
        name: 'keywords',
        content: '编程爱好者, Web开发者, java开发,主攻全栈',
      },

    ],

    // 文档配置
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories:true
      },
    },

    // 导航栏
    navbar: {
      logo: {
        alt: 'Hare',
        src: 'img/HareLogo.gif',
        srcDark: 'img/HareLogo.gif',
      },
      hideOnScroll: true,
      items: [
        {
          label: '博客',
          position: 'right',
          to: 'blog',
        },
        {
          label: '项目',
          position: 'right',
          to: 'project',
        },
        {
          label: 'Docker',
          position: 'right',
          to: 'docs/docker',
        },
        {
          label: '更多',
          position: 'right',
          items: [
            //{ label: '归档', to: 'blog/archive' },
            { label: '笔记', to: 'docs/skill' },
            { label: '资源', to: 'resources' },
            //{ label: '友链', to: 'friends' },
            { label: '工具推荐', to: 'docs/tools' },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },

    // 底部配置
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            { label: '博客', to: 'blog' },
            //{ label: '归档', to: 'blog/archive' },
            { label: '技术笔记', to: 'docs/skill' },
            { label: '实战项目', to: 'project' },
            { label: '前端示例', to: 'https://example.kuizuo.cn' },
          ],
        },
        {
          title: '社交媒体',
          items: [
            { label: '关于我', to: '/about' },
            { label: 'GitHub', href: social.github.href },
            // { label: 'Twitter', href: social.x.href },
            { label: '掘金', href: social.juejin.href },
            { label: 'Discord', href: social.discord.href },
          ],
        },
        {
          title: '网站',
          items: [
            { label: 'js反混淆', to: 'https://js-deobfuscator.kuizuo.cn' },
            { label: 'cyberChef', to: 'https://gchq.github.io/CyberChef' },
            { label: 'api服务', to: 'https://api.kuizuo.cn' },
            { label: '便民服务', to: 'https://service.kuizuo.cn' },
            { label: '站点监控', to: 'https://uptime.kuizuo.cn' },
          ],
        },
        {
          title: '更多',
          items: [
            // { label: '友链', position: 'right', to: 'friends' },
            { label: '导航', position: 'right', to: 'resources' },
            {
              html: `
                <a href="https://docusaurus.io/zh-CN/" target="_blank" rel="noreferrer noopener">
                  <img src="/img/buildwith.png" alt="build with docusaurus" width="120" height="50"/>
                <a/>
                `,
            },
          ],
        },
      ],
      // copyright: `
      //   <p style="margin-bottom: 0;"><a href="http://beian.miit.gov.cn/">${beian}</a></p>
      //   <p style="display: inline-flex; align-items: center;"><img style="height:20px;margin-right: 0.5rem;" src="/img/police.png" alt="police" height="20"/><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${
      //     beian1.match(/\d+/)?.[0]
      //   }" >${beian1}</a></p>
      //   <p>Copyright © 2020 - PRESENT Hare Built with Docusaurus.</p>
      //   `,
    },

    // 搜索配置
    // algolia: {
    //   appId: 'GV6YN1ODMO',
    //   apiKey: '50303937b0e4630bec4a20a14e3b7872',
    //   indexName: 'kuizuo',
    // },

    // 高亮
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
      additionalLanguages: [
        'bash',
        'json',
        'java',
        'python',
        'php',
        'graphql',
        'rust',
        'toml',
        'protobuf',
      ],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },

     // 评论
    giscus: {
      repo: 'Hare-Success/HareBlog',
      repoId: 'R_kgDOMazvYQ',
      category: 'General',
      categoryId: 'DIC_kwDOMazvYc4ChMAG',
      theme: 'light',
      darkTheme: 'dark_dimmed',
    } satisfies Partial<GiscusConfig>,

    // 目录深度
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },

    liveCodeBlock: { playgroundPosition: 'top' },

    // 图片缩放
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  },

  // 预设
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.ts',
        },
        // Test 纯文档模式:https://docusaurus.io/zh-CN/docs/docs-introduction
        blog: {
            path: 'blog',
            showReadingTime:true,
            readingTime: ({ content, frontMatter, defaultReadingTime }) =>
              defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
            editUrl: ({locale, blogDirPath, blogPath}) => {
              return `https://github.com/facebook/docusaurus/edit/main/website/${blogDirPath}/${blogPath}`;
            },
            postsPerPage: 10,
            feedOptions: {
              type: 'all',
              copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
            },
            blogTitle: 'Hare Blog',
            blogDescription: 'Read blog posts about Docusaurus from the team',
            blogSidebarCount: 'ALL',
            blogSidebarTitle: 'Hare的博客',
            onInlineTags: 'throw',
          },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
        sitemap: {
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        },
        debug: process.env.NODE_ENV === 'development',
      } satisfies Preset.Options,
    ],
  ],

  // 插件
  plugins: [
    'docusaurus-plugin-image-zoom',
    '@docusaurus/plugin-ideal-image',
    [
      'docusaurus-plugin-baidu-tongji',
      { token: 'c9a3849aa75f9c4a4e65f846cd1a5155' },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: process.env.NODE_ENV === 'development',
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#12affa' },
        ],
      },
    ],
    [
      'vercel-analytics',
      {
        debug: process.env.NODE_ENV === 'development',
        mode: 'auto',
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
  ],

  // head配置
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Hare的个人博客',
      },
    },
  ],

  // 字体设置
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Normal.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Semibold.min.css',
  ],

  // 国际化
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
  onBrokenLinks: 'warn',
}

export default config
