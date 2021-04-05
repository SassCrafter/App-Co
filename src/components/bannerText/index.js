import React from 'react'
import { Container, Title, SubTitle, Form, Group, Input, Submit } from './styles/bannerText'

function BannerText({ children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default BannerText

BannerText.Title = function BannerTextTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
BannerText.SubTitle = function BannerTextSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
BannerText.Group = function BannerTextGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}
BannerText.Form = function BannerTextForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>
}
BannerText.Input = function BannerTextInput({ ...restProps }) {
    return <Input {...restProps} />
}

BannerText.Submit = function BannerTextSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>
}
