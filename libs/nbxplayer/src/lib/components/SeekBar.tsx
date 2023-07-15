import {useVideoContext} from "../VideoProvider";
import {Slider, styled} from "@mui/material";

const NobitexSlider = styled(Slider)({
  color: '#371D66',
  height: 6,
  transition: 'all 50ms ease-in',
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    transition: 'all 200ms ease-in',
    height: 12,
    width: 12,
    backgroundColor: '#FFA726',
    '&:hover': {
      height: 20,
      width: 20,
      backgroundColor: '#FFA726',
      border: '5px solid currentColor',
    },
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#FFA726',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': {display: 'none'},
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const SeekBar = () => {
  const {currentTime, duration, seek} = useVideoContext()

  const handleChangeSeekBar = (event, newValue) => {
    seek(newValue)
  }

  const valueTextTopSeekBar = (value: number) => {
    if (value > 60) {
      const min = Math.round(value / 60)
      const sec = value % 60
      return `${min}:${sec}`
    } else {
      return `${value}`
    }
  }

  return (
    <NobitexSlider
      valueLabelFormat={valueTextTopSeekBar}
      onChange={handleChangeSeekBar}
      aria-label="Temperature"
      valueLabelDisplay="auto"
      value={Math.round(currentTime)}
      marks
      min={0}
      max={duration || 100}
    />
  )
}

export default SeekBar
