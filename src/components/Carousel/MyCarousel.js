import React, { useState, useCallback } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselCaption
} from 'reactstrap';
// import carImage from '../../assets/img/theme/info_img.png';

// const items = [
//     {
//         src: carImage,
//         altText: 'Slide 1',
//         caption: 'Slide 1'
//     },
//     {
//         src: carImage,
//         altText: 'Slide 2',
//         caption: 'Slide 2'
//     },
//     {
//         src: carImage,
//         altText: 'Slide 3',
//         caption: 'Slide 3'
//     }
// ];

const MyCarousel = ({ vehicles }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const next = useCallback(() => {
        if (animating) return;
        const nextIndex = activeIndex === vehicles.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }, [activeIndex, animating,vehicles]);

    const previous = useCallback(() => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? vehicles.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }, [activeIndex, animating,vehicles]);

    // const goToIndex = (newIndex) => {
    //     if (animating) return;
    //     setActiveIndex(newIndex);
    // };

    const slides = vehicles?.map((item, i) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={i}
            >
                <div className="d-flex justify-content-center align-items-center" >
                    <span className="carousel-image-container" >
                        <img src={item.photo} alt={item.altText} />
                    </span>
                </div>
                <CarouselCaption className="carousel-caption-container" captionText={item.vehicle_label} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={false}
            className="w-100 h-100"
        >
            {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
            {slides}
            <CarouselControl className="carousel-control-container" direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl className="carousel-control-container" direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
};

export default MyCarousel;