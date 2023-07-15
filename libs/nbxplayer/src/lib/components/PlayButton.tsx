import { IconButton } from '@mui/material'
import { PlayArrow, PlayCircle } from '@mui/icons-material'
import { useVideoContext } from '../VideoProvider'

const PlayButton = () => {
  const { play } = useVideoContext()
  return (
    <IconButton sx={{ backgroundColor: '#371D66' }}>
      <PlayArrow color={'warning'} onClick={play} />
    </IconButton>
  )
}

export default PlayButton
