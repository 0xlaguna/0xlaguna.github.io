import React from 'react';
import { animated } from 'react-spring';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';
import { useMousePosition } from '../../framework/useMousePosition';

import './CrossHairStyles.css';

const CrossHairs = styled.div`
  ${breakpoint('mobile')`
    display: none;
  `};
  ${breakpoint('tablet')`
    display: block;
  `};
`;

export default function CrossHair() {
  const position = useMousePosition();
  return (
    <CrossHairs>
      <animated.div className="hair" style={{ width: '100%', transform: `translate3d(0, ${position.y}px, 0)` }} />
      <animated.div className="hair" style={{ height: '100%', transform: `translate3d(${position.x}px, 0 ,0)` }} />
    </CrossHairs>
  );
}
