import { useVideoContext } from '../VideoProvider'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import PlayArrow from '@mui/icons-material/PlayArrow'

const PlayButton = () => {
  const { play } = useVideoContext()
  return (
    <Box alignSelf={'center'}>
      <IconButton sx={{ backgroundColor: '#371D66' }} onClick={play} size={'small'}>
        <PlayArrow fontSize={'small'} color={'warning'} />
      </IconButton>
    </Box>
  )
}

export default PlayButton
