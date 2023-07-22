import { styled } from '@mui/material'
import { createContext, useContext, useEffect, useRef, useState } from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import Timer from './components/Timer'
import SeekBar from './components/SeekBar'
import PlayButton from './components/PlayButton'
import SoundButton from './components/SoundButton'
import FullScreenButton from './components/FullScreenButton'
import useUserNetQuality from './api/hooks/useUserNetQuality'
import SpeedSelector from './components/SpeedSelector/SpeedSelector'
import QualitySelector from './components/QualitySelector/QualitySelector'

const VideoContext = createContext(null)

const SeekbarWrapper = styled(Grid)`
  bottom: 0;
  position: absolute;
  background-image: linear-gradient(to top, #371d66, #371d6601);
`

export interface NbxPlayerProps {
  poster?: string
  width?: 'xl' | 'md' | 'sm' | 'lg'
  videoData: string | Array<VideoModel>
}

const VideoProvider = (props: NbxPlayerProps) => {
  const [duration, setDuration] = useState<number>(0)
  const [speedLvl, setSpeedLvl] = useState<number>(1)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [videoTagRef, setVideoTagRef] = useState<HTMLVideoElement>()
  const [sourceTagRef, setSourceTagRef] = useState<HTMLSourceElement>()
  const [qualityLabel, setQualityLabel] = useState<string>('')

  const netQuality = useUserNetQuality()

  const containerRef = useRef()
  const videoContainerRef = useRef(null)
  const seekerContainerRef = useRef(null)

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

  const speed = (speed: number) => {
    setSpeedLvl(speed)
    videoTagRef.playbackRate = speed
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
    videoTagRef.poster = props.poster || ''

    videoTagRef.load()
    videoContainerRef?.current?.appendChild(videoTagRef)
    setDuration(videoTagRef.duration)
  }

  useEffect(() => {
    if (videoTagRef) {
      if (typeof props.videoData === 'string') {
        sourceTagRef.src = props.videoData
      } else if (Array.isArray(props.videoData)) {
        props.videoData.map((item) => {
          if (item.quality === netQuality) {
            setQualityLabel(item.quality)
            sourceTagRef.src = item.url
          }
        })
      }
      sourceCreator()
    }
  }, [videoTagRef])

  return (
    <VideoContext.Provider
      value={{
        seek,
        play,
        speed,
        props,
        quality,
        soundOn,
        speedLvl,
        duration,
        currentTime,
        videoTagRef,
        qualityLabel,
        containerRef,
      }}
    >
      <Grid container ref={containerRef}>
        <Grid item position={'relative'} display={'flex'}>
          <Box ref={videoContainerRef} />
          <SeekbarWrapper ref={seekerContainerRef} pr={2} pl={2} container>
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
                <SpeedSelector />
                <FullScreenButton />
                <SoundButton />
              </Stack>
            </Grid>
          </SeekbarWrapper>
        </Grid>
      </Grid>
    </VideoContext.Provider>
  )
}

export function useVideoContext() {
  return useContext(VideoContext)
}

export default VideoProvider
