import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import bgMask from '../../assets/bgMask.svg';
import bgPattern from '../../assets/bgPattern.svg';

const BackgroundBlock = styled.div`
  min-height: 100%;
  position: relative;
  background-color: #171717;
`;

const BackgroundMask = styled(animated.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #171717;
  background-attachment: fixed;
  background-image: url(${bgPattern});
  background-size: 10%;
  mask-image: url(${bgMask});
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
  pointer-events: none;
`;

function Background(props) {
  const { children } = props;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);
  const mouseSpeed = 0.02;

  const transition = useTransition(isExpanded, {
    from: {
      scale: '30%',
    },
    enter: {
      scale: '100%',
    },
    leave: {
      scale: '30%',
    },
    config: {
      tension: 51,
    },
  });

  function onMouseMove(e) {
    const distanceX = e.pageX - mousePosition.x;
    const distanceY = e.pageY - mousePosition.y;

    setMousePosition(
      {
        ...mousePosition,
        x: mousePosition.x + distanceX * mouseSpeed,
        y: mousePosition.y + distanceY * mouseSpeed,
      },
    );
  }

  useEffect(() => {
    setIsExpanded(true);

    return () => setIsExpanded(false);
  }, []);

  return (
    <BackgroundBlock onMouseMove={(e) => onMouseMove(e)}>
      {transition((style, item) => (
        item ? (
          <BackgroundMask
            style={{ ...style, backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px` }}
          />
        ) : ''))}
      {children}
    </BackgroundBlock>
  );
}

Background.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Background;
