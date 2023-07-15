import { IconButton } from '@mui/material'
import { SurroundSound, VolumeUp } from '@mui/icons-material'
import { useVideoContext } from '../VideoProvider'

const SoundButton = () => {
  const { soundOn } = useVideoContext()
  return (
    <IconButton sx={{ backgroundColor: '#371D66' }}>
      <VolumeUp color={'warning'} onClick={soundOn} />
    </IconButton>
  )
}
export default SoundButton
