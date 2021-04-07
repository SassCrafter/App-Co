import React from 'react'
import { Container, Text, Title, Lead, RegularWeight, ImageContainer, Image } from './styles/section'

function Section({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Section

Section.Text = function SectionText({ children, textAlign='center', textColor='inherit', ...restProps }) {
    return <Text textAlign={textAlign} textColor={textColor} {...restProps}>{children}</Text>
}

Section.Title = function SectionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Section.Lead = function SectionLead({ children, color='var(--text-color-light)', ...restProps }) {
    return <Lead color={color} {...restProps}>{children}</Lead>
}

Section.RegularWeight = function SectionRegularWeight({ children, ...restProps }) {
    return <RegularWeight {...restProps}>{children}</RegularWeight>
}

Section.Image = function SectionImage({ children, justify='flex-end', src='', alt='', ...restProps }) {
    return (
        <ImageContainer justify={justify} {...restProps}>
            <Image src={src} alt={alt} />
        </ImageContainer>
    )
}

