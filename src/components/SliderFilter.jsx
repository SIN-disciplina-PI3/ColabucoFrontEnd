import React from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Stack,
    Image,
} from '@chakra-ui/react'

import sliderthumb from '../assets/sliderthumb.svg';

function SliderFilter() {
    const [sliderValue, setSliderValue] = React.useState(5)
    const [showTooltip, setShowTooltip] = React.useState(false)
    return (
        <Stack pt='100px' className='montserrat700' pb='32px'>
            <Slider
                id='slider'
                defaultValue={10}
                min={0}
                max={100}
                onChange={(v) => setSliderValue(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >

                <SliderTrack h='8px' bg='#d9d9d9'>
                    <SliderFilledTrack bg='black' />
                </SliderTrack>

                <SliderThumb w='39px'>
                    <Image src={sliderthumb} ></Image>
                </SliderThumb>

                <Stack>
                    <SliderMark value={1} mt='21px' ml='0' fontSize='18px'>
                        R$ 1,00
                    </SliderMark>
                    <SliderMark value={50} mt='21px' fontSize='18px'>
                        R$ 50,00
                    </SliderMark>
                    <SliderMark value={100} mt='21px' fontSize='18px'>
                        R$ 300,00
                    </SliderMark>
                </Stack>
            </Slider>
        </Stack>
    )
}

export default SliderFilter
