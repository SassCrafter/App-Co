import React from 'react'
import { Container, Inner, IconContainer, Icon, Description } from './styles/feature'

function Feature({ children, ...restProps }) {
    return (
        <Inner {...restProps}>
            {children}
        </Inner>
    )
}

export default Feature


Feature.Container = function FeatureContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
Feature.IconContainer = function FeatureIcon({ children, ...restProps }) {
    return <IconContainer {...restProps}>{children}</IconContainer>
}
Feature.Icon = function FeatureIcon({ ...restProps }) {
    return <Icon {...restProps} />
}
Feature.Description = function FeatureDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>
}

