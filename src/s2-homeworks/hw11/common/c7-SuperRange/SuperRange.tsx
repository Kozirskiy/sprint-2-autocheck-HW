import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                //🖍️

                width: 300,
                color: '#00bcd4',
                height: 6,

                '& .MuiSlider-thumb': {
                    width: 16,
                    height: 16,
                    backgroundColor: '#fff',
                    border: '2px solid #00bcd4',
                },

                '& .MuiSlider-track': {
                    border: 'none',
                },

                '& .MuiSlider-rail': {
                    opacity: 0.3,
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
