import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { useRoute, Link } from 'wouter';
import { useSpring, useTrail, animated } from 'react-spring';
import breakpoint from 'styled-components-breakpoint';
import { isMobile } from 'react-device-detect';

import './MenuStyles.css';

const StyledContainer = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;

  background: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  z-index: 50;

  ${breakpoint('mobile')`
    width: 75vw;
  `};
  ${breakpoint('tablet')`
    width: 25vw;
  `};
`

const StyledNav = styled.nav`
  position: fixed;
  top: 50%;
  left: 5vw;
  transform: translateY(-50%);

  a:link,
  a:visited {
    display: block;

    &.active {
      color: red;
    }
  }
`

const Hamburger = styled.div`
  position: fixed;
  top: 2rem;
  left: 5vw;
  z-index: 100;
  cursor: pointer;
  width: 175px;

  .logo {
    position: absolute;
    top: -10px;
    right: 0%;
    max-width: 100px;
  }
`
const ActiveLink = props => {
  const [isActive] = useRoute(props.href)
  return (
    <Link {...props} className={isActive ? 'active' : ''}>
      {props.children}
    </Link>
  )
}

export const Menus = () => {

  const toggleNav = () => {
    if (isMobile) {
      set(state => !state)
    }
  }

  const routes = [
    <ActiveLink onClick={toggleNav} id="home" href="/" key="home">
      Inicio
    </ActiveLink>,
    <ActiveLink onClick={toggleNav} id="projects" href="/projects" key="about">
      Proyectos
    </ActiveLink>,
    <ActiveLink onClick={toggleNav} id="contact" href="/contact" key="contact">
      Contacto
    </ActiveLink>
  ];

  const [toggle, set] = useState(false);
  const trail = useTrail(routes.length, {
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : -50,
    from: { opacity: 0, x: -50 }
  });

  const props = useSpring({
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : -100
  });

  return(
    <>
      <Hamburger>
        <HamburgerMenu
          isOpen={toggle}
          menuClicked={() => set(state => !state)}
          width={30}
          height={16}
          strokeWidth={3}
          color="red"
          borderRadius={0}
          animationDuration={0.5}
        />
      </Hamburger>
      <StyledContainer style={{ ...props, transform: props.x.interpolate(x => `translate3d(${x}%,0,0)`) }}>
        <StyledNav>{routes.map(route => route)}</StyledNav>
      </StyledContainer>
    </>
  );
}
