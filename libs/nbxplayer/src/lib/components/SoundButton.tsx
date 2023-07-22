import { useVideoContext } from '../VideoProvider'

import Box from '@mui/material/Box'
import { VolumeUp } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'

const SoundButton = () => {
  const { soundOn } = useVideoContext()
  return (
    <Box alignSelf={'center'}>
      <IconButton
        size={'small'}
        onClick={soundOn}
        sx={{ backgroundColor: '#371d6660', color: 'white' }}
      >
        <VolumeUp color={'inherit'} fontSize={'small'} />
      </IconButton>
    </Box>
  )
}
export default SoundButton
