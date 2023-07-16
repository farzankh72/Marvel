import { useVideoContext } from '../VideoProvider'

import { BadgeProps, styled } from '@mui/material'

import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'

import Alarm from '@mui/icons-material/Alarm'
import SpeedSharp from '@mui/icons-material/SpeedSharp'

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  '& .MuiBadge-badge': {
    color: 'white',
    fontSize: '10px',
    padding: '0 4px',
  },
}))

const QualitySelector = () => {
  const { props, quality } = useVideoContext()

  if (typeof props.videoData === 'string') {
    return <></>
  } else if (typeof props.videoData === 'object') {
    return (
      <Box sx={{ transform: 'translateZ(0px)' }}>
        <SpeedDial
          direction='right'
          ariaLabel='SpeedDial tooltip example'
          sx={{
            '& .MuiFab-primary': {
              width: 34,
              height: 30,
              color: 'white',
              backgroundColor: '#371D66',
              '&:hover': { backgroundColor: 'white', color: '#a993d1' },
            },
          }}
          icon={<SpeedSharp fontSize={'small'} color={'warning'} />}
        >
          <SpeedDialAction
            icon={<Alarm fontSize={'small'} />}
            key={'props.videoData.SD'}
            onClick={() => quality(props.videoData.SD, 'SD')}
          />
          <SpeedDialAction
            icon={<Alarm fontSize={'small'} />}
            key={'props.videoData.HD'}
            onClick={() => quality(props.videoData.HD, 'HD')}
          />
          <SpeedDialAction
            icon={<Alarm fontSize={'small'} />}
            key={'props.videoData.FULL_HD'}
            onClick={() => quality(props.videoData.FULL_HD, 'FHD')}
          />
        </SpeedDial>
      </Box>
    )
  }
}

export default QualitySelector
