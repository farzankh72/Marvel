import { IconButton } from '@mui/material'
import { Fullscreen } from '@mui/icons-material'
import { useVideoContext } from '../VideoProvider'

const FullScreenButton = () => {
  const { fullScreen } = useVideoContext()
  return (
    <IconButton sx={{ backgroundColor: '#371D66' }} onClick={fullScreen}>
      <Fullscreen color={'warning'} />
    </IconButton>
  )
}

export default FullScreenButton
