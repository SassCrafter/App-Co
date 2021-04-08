import React, { useState, createContext, useContext } from 'react'
import { Container, Inner, Header, Body, Title, Text, Icon } from './styles/accordion'

const toggleContext = createContext();

function Accordion({ children, id, color='var(--text-color-light)', ...restProps }) {
    return (
        <Inner color={color} {...restProps}>
            {children}
        </Inner>
    )
}

export default Accordion

Accordion.Container = function AccordionContainer({ children, ...restProps }) {
    const [openId, setOpenId] = useState(null);
    return (
        <toggleContext.Provider value={{openId, setOpenId}}>
            <Container {...restProps}>{children}</Container>
        </toggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({ children, id, ...restProps }) {
    const { openId, setOpenId } = useContext(toggleContext);

    const clickHandler = () => {
        if (openId === id) {
            setOpenId(null);
        }
        else {
            setOpenId(id);
        }
    }

    return (
        <Header onClick={clickHandler} {...restProps} >
            {children}
            {openId === id ? <Accordion.Icon>-</Accordion.Icon> : 
                <Accordion.Icon>+</Accordion.Icon>
            }
        </Header>
    )
}

Accordion.Body = function AccordionBody({ children, id, ...restProps }) {
    const { openId, setOpenId } = useContext(toggleContext);
    return <Body {...restProps} className={openId === id ? 'open' : ''}>{children}</Body>
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Accordion.Text = function AccordionText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Accordion.Icon = function AccordionIcon({ children, ...restProps }) {
    return <Icon {...restProps}>{children}</Icon>
}