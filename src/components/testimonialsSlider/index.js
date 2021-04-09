import React from 'react'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';
import { Top, Bottom, Image, Info, Name, Company, Text, Nav, Btn} from './styles/testimonialsSlider'
import TestimonialsData from '../../fixtures/testimonialsData.json'


SwiperCore.use([Navigation]);


function TestimonialsSlider({ children, ...restProps}) {
    return (
        <Swiper
            spaceBetween={50}
            grabCursor={true}
            navigation={{
                nextEl: '.next',
                prevEl: '.prev'
            }}
        >
        {TestimonialsData.map((item) => (

            <SwiperSlide key={item.id}>
                <TestimonialsSlider.Top>
                    <TestimonialsSlider.Image src={item.image} alt={item.name} />
                    <TestimonialsSlider.Info>
                        <TestimonialsSlider.Name>{item.name}</TestimonialsSlider.Name>
                        <TestimonialsSlider.Company>{item.company}</TestimonialsSlider.Company>
                    </TestimonialsSlider.Info>
                </TestimonialsSlider.Top>
                <TestimonialsSlider.Bottom>
                    <TestimonialsSlider.Text>
                        {item.message}
                    </TestimonialsSlider.Text>
                </TestimonialsSlider.Bottom>
            </SwiperSlide>

        ))}
            <TestimonialsSlider.Nav>
                <TestimonialsSlider.Btn className='prev'>
                    <i className='fas fa-arrow-left'></i>
                </TestimonialsSlider.Btn>
                <TestimonialsSlider.Btn className='next'>
                    <i className='fas fa-arrow-right'></i>
                </TestimonialsSlider.Btn>
            </TestimonialsSlider.Nav>
        </Swiper>
    )
}

export default TestimonialsSlider

TestimonialsSlider.Top = function TestimonialsSliderTop({ children, ...restProps }) {
    return <Top {...restProps }>{children}</Top>
}
TestimonialsSlider.Bottom = function TestimonialsSliderBottom({ children, ...restProps }) {
    return <Bottom {...restProps }>{children}</Bottom>
}
TestimonialsSlider.Image = function TestimonialsSliderImage({ children, ...restProps }) {
    return <Image {...restProps} />
}
TestimonialsSlider.Info = function TestimonialsSliderInfo({ children, ...restProps }) {
    return <Info {...restProps }>{children}</Info>
}
TestimonialsSlider.Name = function TestimonialsSliderName({ children, ...restProps }) {
    return <Name {...restProps }>{children}</Name>
}
TestimonialsSlider.Company = function TestimonialsSliderCompany({ children, ...restProps }) {
    return <Company {...restProps }>{children}</Company>
}
TestimonialsSlider.Text = function TestimonialsSliderText({ children, ...restProps }) {
    return <Text {...restProps }>{children}</Text>
}
TestimonialsSlider.Nav = function TestimonialsSliderNav({ children, ...restProps }) {
    return <Nav {...restProps }>{children}</Nav>
}
TestimonialsSlider.Btn = function TestimonialsSliderBtn({ children, ...restProps }) {
    return <Btn {...restProps }>{children}</Btn>
}
