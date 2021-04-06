import React, { useState, useEffect } from 'react'
import { Header, MobileNav } from '../components'
import * as Routes from '../constants/routes'

function HeaderContainer() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            const scrolledVal = window.pageYOffset ||  //most browsers 
                   (document.documentElement && 
                      document.documentElement.scrollTop) || // 
                   document.body.scrollTop; 
            if (scrolledVal >= 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        })
    }, [])

    const burgerClickHandler = () => {
        setIsNavOpen((prevState) => !prevState);
        
    }

    return (
        <>
            <Header className={`${isScrolled ? 'scrolled' : ''} ${isNavOpen ? 'open' : ''}`}>
                <Header.Nav>
                    <Header.Link to={Routes.HOME}>
                        <Header.Logo src='/images/logo.png' alt='app co' />
                    </Header.Link>
                    <Header.Burger onClick={burgerClickHandler} >
                        <Header.Line className={isNavOpen ? 'open' : ''} />
                    </Header.Burger>

                    <MobileNav className={isNavOpen ? 'open' : ''}>
                    <MobileNav.List>
                        <MobileNav.Item>
                            <MobileNav.Link href='#'>Home</MobileNav.Link>
                        </MobileNav.Item>
                        <MobileNav.Item>
                            <MobileNav.Link href='#'>About</MobileNav.Link>
                        </MobileNav.Item>
                        <MobileNav.Item>
                            <MobileNav.Link href='#'>Features</MobileNav.Link>
                        </MobileNav.Item>
                        <MobileNav.Item>
                            <MobileNav.Link href='#'>Pricing</MobileNav.Link>
                        </MobileNav.Item>
                        <MobileNav.Item>
                            <MobileNav.Link href='#'>Screenshots</MobileNav.Link>
                        </MobileNav.Item>
                    </MobileNav.List>
                </MobileNav>
                </Header.Nav>

                
            </Header>
        </>
    )
}

export default HeaderContainer
