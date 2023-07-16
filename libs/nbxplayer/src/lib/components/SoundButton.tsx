import { useVideoContext } from '../VideoProvider'

import Box from '@mui/material/Box'
import { VolumeUp } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'

const SoundButton = () => {
  const { soundOn } = useVideoContext()
  return (
    <Box alignSelf={'center'}>
      <IconButton sx={{ backgroundColor: '#371D66' }} onClick={soundOn} size={'small'}>
        <VolumeUp color={'warning'} fontSize={'small'} />
      </IconButton>
    </Box>
  )
}
export default SoundButton
