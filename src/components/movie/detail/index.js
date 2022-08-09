import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalfStroke,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';

import { Container, ContentWrapper, CommentWrapper, ArrowBtn } from './styled';
import Comment from '../comment';

const Detail = ({ data }) => {
  const [direction, setDirection] = useState(true);
  const detailRef = useRef(null);

  return (
    <Container ref={detailRef}>
      <ContentWrapper></ContentWrapper>
      <CommentWrapper></CommentWrapper>
      <ArrowBtn onClick={onClickArrow}>
        {direction ? (
          <FontAwesomeIcon icon={faAngleDown} />
        ) : (
          <FontAwesomeIcon icon={faAngleUp} />
        )}
      </ArrowBtn>
    </Container>
  );
};

export default Detail;
