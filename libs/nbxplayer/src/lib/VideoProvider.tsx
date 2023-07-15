import {createContext, useContext, useEffect, useRef, useState} from "react";
import {Container} from "@mui/material";
import SeekBar from "./components/SeekBar";
import QualitySelector from "./components/QualitySelector";

const VideoContext = createContext(null)

export enum VideoQuality {
  SD = 'SD',
  HD = 'HD',
  FULL_HD = 'FULL_HD',
}

export interface VideoFile {
  SD: string
  HD: string
  FULL_HD: string
}

export interface NbxPlayerProps {
  videoData: string | VideoFile
  width?: "xl" | "md" | "sm" | "lg"
}

const VideoProvider = (props: NbxPlayerProps) => {
  const [duration, setDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [videoTagRef, setVideoTagRef] = useState<HTMLVideoElement>()
  const [sourceTagRef, setSourceTagRef] = useState<HTMLSourceElement>()
  const [videoUrl, setVideoUrl] = useState<string>('')

  const containerRef = useRef(null)

  useEffect(() => {
    setVideoTagRef(document?.createElement('video'))
    setSourceTagRef(document?.createElement('source'))
  }, [props.videoData])

  const seek = (time: number) => {
    setCurrentTime(time)
    videoTagRef.currentTime = time
  }

  const quality = (url: string) => {
    sourceTagRef.src = url
    sourceCreator()
  }

  const sourceCreator = () => {
    videoTagRef.width = 300
    videoTagRef.controls = true
    videoTagRef.ontimeupdate = () => {
      setCurrentTime(videoTagRef.currentTime)
    }
    videoTagRef.oncanplay = () => {
      setDuration(videoTagRef.duration)
    }
    videoTagRef.appendChild(sourceTagRef)
    if (containerRef?.current?.innerHTML) {
      containerRef.current.innerHTML = ''
    }
    videoTagRef.load()
    containerRef?.current?.appendChild(videoTagRef)
    setDuration(videoTagRef.duration)
  }

  useEffect(() => {
    if (videoTagRef) {
      if (typeof props.videoData === "string") {
        sourceTagRef.src = props.videoData
      } else if (typeof props.videoData === "object") {
        sourceTagRef.src = props.videoData.SD
      }
      sourceCreator()
    }
  }, [videoTagRef])

  return (
    <VideoContext.Provider value={{currentTime, duration, seek, props, quality}}>
      <Container maxWidth={"xl"}>
        <Container ref={containerRef}/>
        <SeekBar/>
        <QualitySelector/>
      </Container>
    </VideoContext.Provider>
  )
}

export function useVideoContext() {
  return useContext(VideoContext)
}

export default VideoProvider
