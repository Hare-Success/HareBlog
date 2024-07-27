import Translate, { translate } from '@docusaurus/Translate'
import { Icon } from '@iconify/react/dist/iconify.js'
import OpenSourceSvg from '@site/static/svg/feture.svg'
import SpiderSvg from '@site/static/svg/feture1.svg'
import WebDeveloperSvg from '@site/static/svg/feture2.svg'

export type FeatureItem = {
  title: string | React.ReactNode
  description: string | React.ReactNode
  header: React.ReactNode
  icon?: React.ReactNode
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: '前端小农民',
    }),
    description: (
      <Translate>
        相关测试相关测试相关测试相关测试相关测试相关测试相关测试
      </Translate>
    ),
    header: <WebDeveloperSvg className={'h-auto w-full'} height={150} role="img" />,
    icon: <Icon icon="logos:typescript-icon" className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '后端小农民',
    }),
    description: (
      <Translate>
        测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
      </Translate>
    ),
    header: <SpiderSvg className={'h-auto w-full'} height={150} role="img" />,
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '开源爱好者',
    }),
    description: (
      <Translate>
        作为一名开源爱好者，积极参与开源社区，为开源项目贡献代码，希望有生之年能够构建出一个知名的开源项目。
      </Translate>
    ),
    header: <OpenSourceSvg className={'h-auto w-full'} height={150} role="img" />,
  },
]

export default FEATURES
