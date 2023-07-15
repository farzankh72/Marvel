import {useVideoContext} from "../VideoProvider";
import {Badge, BadgeProps, Box, IconButton, SpeedDial, SpeedDialAction, SpeedDialIcon, styled} from "@mui/material";
import {
  Alarm,
  BlurCircularOutlined,
  Edit,
  FilterBAndW,
  OpenInBrowser,
  SaveAlt,
  Share,
  SpeedSharp
} from "@mui/icons-material";

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  '& .MuiBadge-badge': {
    color: 'white',
    fontSize: '10px',
    padding: '0 4px',
  },
}))

const QualitySelector = () => {
  const {props, quality} = useVideoContext()

  if (typeof props.videoData === 'string') {
    return (<></>)
  } else if (typeof props.videoData === 'object') {
    return (
      <Box sx={{transform: 'translateZ(0px)'}}>
        <SpeedDial
          direction="right"
          ariaLabel="SpeedDial tooltip example"
          sx={{
            position: 'absolute',
            '& .MuiFab-primary': {
              color: 'white',
              backgroundColor: '#a993d1',
              width: 38,
              height: 38,
              '&:hover': {backgroundColor: 'white', color: '#a993d1'},
            },
          }}
          icon={<SpeedSharp/>}
        >
          <SpeedDialAction
            key={'props.videoData.SD'}
            icon={<Alarm/>}
            onClick={() => quality(props.videoData.SD)}
          />
          <SpeedDialAction
            key={'props.videoData.HD'}
            icon={<Alarm/>}
            onClick={() => quality(props.videoData.HD)}
          />
          <SpeedDialAction
            key={'props.videoData.FULL_HD'}
            icon={<Alarm/>}
            onClick={() => quality(props.videoData.FULL_HD)}
          />
        </SpeedDial>
      </Box>
    )
  }
}

export default QualitySelector
