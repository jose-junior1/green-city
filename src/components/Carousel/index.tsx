import { useEffect, useState } from 'react'
import * as S from './styles'

import { Slide } from '../Slides'

interface CarouselProps {
    slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => prev === slides.length - 1 ? 0 : prev + 1)
        }, 3000)

        return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }

    return (
        <S.Master id='top'>
            <div className='centralized'>
                <S.Container>
                    <S.SlideImage
                        src={slides[current].image}
                        alt={slides[current].caption}
                    />
                </S.Container>
                <div className='container-carousel'>
                    <S.Caption>
                        {slides[current].caption}
                    </S.Caption>
                    <S.Arrow onClick={prevSlide} className='left'>
                        ❮
                    </S.Arrow>
                    <S.Arrow onClick={nextSlide} className='right'>
                        ❯
                    </S.Arrow>
            </div>
            </div>
        </S.Master>
    )
}

export default Carousel