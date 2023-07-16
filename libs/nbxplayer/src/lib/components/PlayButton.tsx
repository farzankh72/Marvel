import { Box, IconButton } from '@mui/material'
import { PlayArrow } from '@mui/icons-material'
import { useVideoContext } from '../VideoProvider'

const PlayButton = () => {
  const { play } = useVideoContext()
  return (
    <Box alignSelf={'center'}>
      <IconButton sx={{ backgroundColor: '#371D66' }} onClick={play}>
        <PlayArrow color={'warning'} />
      </IconButton>
    </Box>
  )
}

export default PlayButton
