import { useVideoContext } from '../VideoProvider'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import PlayArrow from '@mui/icons-material/PlayArrow'

const PlayButton = () => {
  const { play } = useVideoContext()
  return (
    <Box alignSelf={'center'}>
      <IconButton
        size={'small'}
        onClick={play}
        sx={{ backgroundColor: '#371d6660', color: 'white' }}
      >
        <PlayArrow fontSize={'small'} />
      </IconButton>
    </Box>
  )
}

export default PlayButton
