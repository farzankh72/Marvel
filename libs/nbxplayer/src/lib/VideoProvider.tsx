import { createContext, useContext, useEffect, useRef, useState } from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import Timer from './components/Timer'
import SeekBar from './components/SeekBar'
import PlayButton from './components/PlayButton'
import SoundButton from './components/SoundButton'
import useUserNetQuality from './hooks/useUserNetQuality'
import QualitySelector from './components/QualitySelector'
import FullScreenButton from './components/FullScreenButton'

const VideoContext = createContext(null)

export interface VideoFile {
  SD: string
  HD: string
  FULL_HD: string
}

export interface NbxPlayerProps {
  videoData: string | VideoFile
  width?: 'xl' | 'md' | 'sm' | 'lg'
}

const VideoProvider = (props: NbxPlayerProps) => {
  const [duration, setDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [videoTagRef, setVideoTagRef] = useState<HTMLVideoElement>()
  const [sourceTagRef, setSourceTagRef] = useState<HTMLSourceElement>()
  const [qualityLabel, setQualityLabel] = useState<string>('')

  const netQuality = useUserNetQuality()

  const videoContainerRef = useRef(null)
  const containerRef = useRef()

  useEffect(() => {
    setVideoTagRef(document?.createElement('video'))
    setSourceTagRef(document?.createElement('source'))
  }, [props.videoData])

  const seek = (time: number) => {
    setCurrentTime(time)
    videoTagRef.currentTime = time
  }

  const quality = (url: string, quality: string) => {
    sourceTagRef.src = url
    setQualityLabel(quality)
    sourceCreator()
  }

  const play = () => {
    if (videoTagRef.paused) {
      videoTagRef.play()
    } else {
      videoTagRef.pause()
    }
  }

  const soundOn = () => {
    if (videoTagRef.volume === 0) {
      videoTagRef.volume = 1
    } else {
      videoTagRef.volume = 0
    }
  }

  const sourceCreator = () => {
    videoTagRef.height = 300
    videoTagRef.ontimeupdate = () => {
      setCurrentTime(videoTagRef.currentTime)
    }
    videoTagRef.oncanplay = () => {
      setDuration(videoTagRef.duration)
    }
    videoTagRef.appendChild(sourceTagRef)
    if (videoContainerRef?.current?.innerHTML) {
      videoContainerRef.current.innerHTML = ''
    }
    videoTagRef.load()
    videoContainerRef?.current?.appendChild(videoTagRef)
    setDuration(videoTagRef.duration)
  }

  useEffect(() => {
    if (videoTagRef) {
      if (typeof props.videoData === 'string') {
        sourceTagRef.src = props.videoData
      } else if (typeof props.videoData === 'object') {
        switch (netQuality) {
          case 'SD':
            sourceTagRef.src = props.videoData.SD
            setQualityLabel('SD')
            break
          case 'HD':
            sourceTagRef.src = props.videoData.HD
            setQualityLabel('HD')
            break
          case 'FULL_HD':
            sourceTagRef.src = props.videoData.FULL_HD
            setQualityLabel('FHD')
            break
        }
      }
      sourceCreator()
    }
  }, [videoTagRef])

  return (
    <VideoContext.Provider
      value={{
        seek,
        play,
        props,
        quality,
        soundOn,
        duration,
        currentTime,
        videoTagRef,
        containerRef,
      }}
    >
      <Grid container ref={containerRef}>
        <Grid item position={'relative'} display={'flex'}>
          <Box ref={videoContainerRef} />
          <Grid
            pr={2}
            pl={2}
            container
            bottom={0}
            position={'absolute'}
            sx={{ backgroundColor: '#ffffff20' }}
          >
            <Grid item xs={12}>
              <SeekBar />
            </Grid>
            <Grid pb={1} item xs={9} alignSelf={'center'}>
              <Stack direction={'row'} spacing={1}>
                <PlayButton />
                <Timer />
                <QualitySelector />
              </Stack>
            </Grid>
            <Grid pb={1} item xs={3} alignSelf={'center'}>
              <Stack direction={'row'} spacing={1} justifyContent={'end'}>
                <FullScreenButton />
                <SoundButton />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </VideoContext.Provider>
  )
}

export function useVideoContext() {
  return useContext(VideoContext)
}

export default VideoProvider
