import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Fullscreen from '@mui/icons-material/Fullscreen'

import { useVideoContext } from '../VideoProvider'

const FullScreenButton = () => {
  const { videoTagRef, containerRef } = useVideoContext()

  const toggleFullScreen = () => {
    const videoContainer = containerRef.current

    if (!document.fullscreenElement) {
      if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen()
      } else if (videoContainer.mozRequestFullScreen) {
        // Firefox
        videoContainer.mozRequestFullScreen()
      } else if (videoContainer.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        videoContainer.webkitRequestFullscreen()
      } else if (videoContainer.msRequestFullscreen) {
        // IE/Edge
        videoContainer.msRequestFullscreen()
      }
      videoTagRef.style.width = '100%'
      videoTagRef.style.height = '100%'
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari and Opera
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen()
      }
      videoTagRef.style.height = '300px'
    }
  }

  return (
    <Box alignSelf={'center'}>
      <IconButton
        size={'small'}
        onClick={toggleFullScreen}
        sx={{ backgroundColor: '#371d6660', color: 'white' }}
      >
        <Fullscreen fontSize={'small'} />
      </IconButton>
    </Box>
  )
}

export default FullScreenButton
