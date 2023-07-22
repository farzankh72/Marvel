import { useVideoContext } from '../VideoProvider'

import Box from '@mui/material/Box'
import { VolumeMute, VolumeUp } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'

const SoundButton = () => {
  const { soundOn, videoTagRef } = useVideoContext()
  return (
    <Box alignSelf={'center'}>
      <IconButton
        size={'small'}
        onClick={soundOn}
        sx={{ backgroundColor: '#371d6660', color: 'white' }}
      >
        {videoTagRef?.volume === 1 ? (
          <VolumeUp color={'inherit'} fontSize={'small'} />
        ) : (
          <VolumeMute color={'inherit'} fontSize={'small'} />
        )}
      </IconButton>
    </Box>
  )
}
export default SoundButton
