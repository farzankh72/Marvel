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

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress) // Add keydown event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress) // Clean up event listener
    }
  }, [])

  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      videoTagRef.style = { ...videoTagRef.style, height: '300px' }
    }
  }

  return (
    <Box alignSelf={'center'}>
      <IconButton sx={{ backgroundColor: '#371D66' }} onClick={toggleFullScreen}>
        <Fullscreen color={'warning'} />
      </IconButton>
    </Box>
  )
}

export default FullScreenButton
