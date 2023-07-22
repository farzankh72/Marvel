import { useEffect } from 'react'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

import { Fullscreen } from '@mui/icons-material'

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
      videoTagRef.style.width = 'auto'
      videoTagRef.style.height = 'auto'
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
      <IconButton sx={{ backgroundColor: '#371D66' }} onClick={toggleFullScreen} size={'small'}>
        <Fullscreen color={'warning'} fontSize={'small'} />
      </IconButton>
    </Box>
  )
}

export default FullScreenButton
