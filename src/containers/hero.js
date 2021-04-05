import React, { useState } from 'react'
import { Hero, BannerText } from '../components/'

function HeroContainer() {
    const [email, setEmail] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setEmail('');
    }

    const inputChangeHandler = ({target}) => {
        setEmail(target.value);
    }

    return (
        <>
            <Hero>
                <Hero.Base>
                    <Hero.Item>
                        <BannerText textColor='white'>
                            <BannerText.Title><strong>Brainstorming</strong> for desired perfect Usability</BannerText.Title>
                            <BannerText.SubTitle>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</BannerText.SubTitle>
                            <BannerText.Form onSubmit={submitHandler}>
                                <BannerText.Group>
                                <BannerText.Input value={email} onChange={inputChangeHandler} placeholder='info@yourdomain.com' required />
                                <BannerText.Submit type='submit'>Submit</BannerText.Submit>
                                </BannerText.Group>
                            </BannerText.Form>
                        </BannerText>
                    </Hero.Item>
                    <Hero.Item>
                        <Hero.Image src='/images/hero/app-product.png' alt='product' />
                    </Hero.Item>
                </Hero.Base>
                <Hero.BottomImg src='/images/hero/bg-shape.svg' alt='wave shape'/>
            </Hero>
        </>
    )
}

export default HeroContainer
