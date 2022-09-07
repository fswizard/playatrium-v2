import { Box } from '@mui/material'
import { useRef, useState, useMemo, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import BuilderImage from '../../assets/images/builder.png'
import { palette } from '../../themes/AtriumTheme'
import { SubtitleText } from '../UpdatesSection'

import type { IBuilder } from './Builder'
import { Builder } from './Builder'

const builders: IBuilder[] = [
  {
    bio: 'He’s good with the numbers and shit, hisis motto is C.R.E.A.M. Overall chill dude tho. ',
    discordLink: '',
    name: 'snowstorm',
    pfp: BuilderImage,
    tags: ['finance guy', 'outdoors junkie'],
    title: 'cfo',
    twitterLink: '',
  },
  {
    bio: '',
    discordLink: '',
    name: '',
    pfp: '',
    tags: [''],
    title: '',
    twitterLink: '',
  },
  {
    bio: '',
    discordLink: '',
    name: '',
    pfp: '',
    tags: [''],
    title: '',
    twitterLink: '',
  },
]
const defaultSpeed = 2000
export const BuildersSection = () => {
  const sliderRef = useRef<Slider>(null)
  const [speed, setSpeed] = useState(defaultSpeed)

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 100,
    cssEase: 'linear',
    dots: false,
    infinite: true,
    // pauseOnFocus
    // pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          initialSlide: 4,
          // slidesToScroll: 4,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          initialSlide: 3,
          // slidesToScroll: 3,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          // slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
    // slidesToScroll: 5,
    slidesToShow: 5,
    speed: 2000,
    // swipe: false,
    touchMove: true,
    // easing
    // swipeToSlide: false,
    // swipe: false,
  }

  const settingsMemo = useMemo(() => ({ ...settings, speed }), [speed])

  useEffect(() => {
    console.log('settings are changed ', settingsMemo)
  }, [settingsMemo])
  const handleHover = (hover: boolean) => {
    // console.log('handle hover in builders section ', hover)
    if (sliderRef.current) {
      if (hover) {
        setSpeed(100)
        sliderRef.current.slickPause()
      } else {
        setSpeed(defaultSpeed)
        sliderRef.current.slickPlay()
      }
      // setTouchMove(!hover)
    } else {
    }
  }
  return (
    <Box
      id="team-section"
      py={{ md: 25, xs: 16 }}
      height="100%"
      sx={
        {
          // minHeight:
        }
      }
    >
      <Box display="flex" justifyContent="center">
        <SubtitleText color={palette.error.main}>
          the grid builders
        </SubtitleText>
      </Box>
      <Box mt={{ md: 20, xs: 16 }}>
        <Slider {...settingsMemo} ref={sliderRef}>
          {new Array(10).fill(2).map((_, key: number) => (
            <Builder
              key={key}
              builder={builders[0]}
              handleHover={handleHover}
            />
          ))}
        </Slider>
      </Box>
    </Box>
  )
}
