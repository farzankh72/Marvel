import { useVideoContext } from '../VideoProvider'

import { Badge, BadgeProps, Box, SpeedDial, SpeedDialAction, styled } from '@mui/material'

import { Alarm, SpeedSharp } from '@mui/icons-material'

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
              width: 38,
              height: 38,
              color: 'white',
              backgroundColor: '#371D66',
              '&:hover': { backgroundColor: 'white', color: '#a993d1' },
            },
          }}
          icon={<SpeedSharp />}
        >
          <SpeedDialAction
            icon={<Alarm />}
            key={'props.videoData.SD'}
            onClick={() => quality(props.videoData.SD, 'SD')}
          />
          <SpeedDialAction
            icon={<Alarm />}
            key={'props.videoData.HD'}
            onClick={() => quality(props.videoData.HD, 'HD')}
          />
          <SpeedDialAction
            icon={<Alarm />}
            key={'props.videoData.FULL_HD'}
            onClick={() => quality(props.videoData.FULL_HD, 'FHD')}
          />
        </SpeedDial>
      </Box>
    )
  }
}

export default QualitySelector
