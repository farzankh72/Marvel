import { Box, IconButton } from '@mui/material'
import { VolumeUp } from '@mui/icons-material'
import { useVideoContext } from '../VideoProvider'

const SoundButton = () => {
  const { soundOn } = useVideoContext()
  return (
    <Box alignSelf={'center'}>
      <IconButton sx={{ backgroundColor: '#371D66' }} onClick={soundOn}>
        <VolumeUp color={'warning'} />
      </IconButton>
    </Box>
  )
}
export default SoundButton
