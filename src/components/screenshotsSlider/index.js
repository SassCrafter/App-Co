/* eslint-disable import/first */

import React from 'react'
import SwiperCore, { Pagination, Zoom } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/zoom/zoom.min.css';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([ Pagination, Zoom ]);

import { ImageContainer, Image, PaginationEl, Frame } from './styles/screenshotsSlider'
import ScreenshotsData from '../../fixtures/screenshotsData.json'


function ScreenshotsSlider() {
    return (
        <Swiper
            style={{padding: '5rem 0'}}
            slidesPerView={1}
            spaceBetween={50}
            pagination={{ 
                clickable: true,
                el: '.screenshotSliderPagination'
            }}
            loop
            zoom={{
                maxRatio: 1.2,
                minRatio: 1,
            }}
            breakpoints={{
                768: {
                    initialSlide: 2,
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                900: {
                    initialSlide: 2,
                    slidesPerView: 3,
                    spaceBetween: 100,
                }
            }}
            centeredSlides
            onInit={(swiper) => swiper.zoom.in()}
            onSlideChangeTransitionStart={(swiper) => swiper.zoom.out()}
            onSlideChangeTransitionEnd={(swiper) => swiper.zoom.in()}
        >
                {ScreenshotsData.map((item) => (
                        <SwiperSlide key={item.id} style={{borderRadius: '20px', overflow: 'hidden'}}>
                                <div className='swiper-zoom-container'  >
                                    <ScreenshotsSlider.ImageContainer className='swiper-zoom-target' bg={item.image}>
                                        {/* <ScreenshotsSlider.Image src={item.image} alt='screenshot' /> */}
                                    </ScreenshotsSlider.ImageContainer>
                                </div>
                        </SwiperSlide>
                ))}
            <ScreenshotsSlider.Frame bg='/images/bgs/phone-frame.png'/>
            <ScreenshotsSlider.PaginationEl className='screenshotSliderPagination' />
        </Swiper>
    )
}

export default ScreenshotsSlider

ScreenshotsSlider.ImageContainer = function ScreenshotsSliderImageContainer({ children, ...restProps }) {
    return <ImageContainer {...restProps}>{children}</ImageContainer>
}
ScreenshotsSlider.Image = function ScreenshotsSliderImage({ ...restProps }) {
    return <Image {...restProps} />
}

ScreenshotsSlider.PaginationEl = function ScreenshotsSliderPaginationEl({ children, ...restProps }) {
    return <PaginationEl {...restProps}>{children}</PaginationEl>
}
ScreenshotsSlider.Frame = function ScreenshotsSliderFrame({ children,bg='', ...restProps }) {
    return (
        <Frame bg={bg} {...restProps}>
            <Image src={bg} alt='phone frame' />
        </Frame>
    )
}

