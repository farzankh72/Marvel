import { useVideoContext } from '../../VideoProvider'

import ButtonSelector from './ButtonSelector'

const QualitySelector = () => {
  const { props } = useVideoContext()

  if (typeof props.videoData === 'string') {
    return <></>
  } else if (Array.isArray(props.videoData)) {
    return <ButtonSelector />
  }
}

export default QualitySelector
