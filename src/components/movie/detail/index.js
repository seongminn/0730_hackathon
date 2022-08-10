import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalfStroke,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  DetailWrapper,
  CommentWrapper,
  ArrowBtn,
  Header,
  HeaderKor,
  HeaderEng,
  ContentWrapper,
  Poster,
  ContentItem,
  ContentTitle,
  Content,
  Summary,
} from './styled';
import Comment from '../comment';
import GenreBox from '../../shared/Genre';
import NotFoundPage from './../../shared/404/index';

const Detail = ({ data }) => {
  const [direction, setDirection] = useState(true);
  const detailRef = useRef(null);

  const onClickArrow = () => {
    const targetHeight = detailRef.current.clientHeight;

    direction
      ? window.scrollTo({ top: targetHeight, behavior: 'smooth' })
      : window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onScroll = () => {
    if (window.scrollY > window.innerHeight * 0.5) {
      setDirection(false);
    } else if (window.scrollY < window.innerHeight * 0.5) {
      setDirection(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  return data ? (
    <Container ref={detailRef}>
      <Header>
        <HeaderKor>{data.title_kor}</HeaderKor>
        <HeaderEng>{data.title_eng}</HeaderEng>
      </Header>
      <DetailWrapper>
        <Poster src={data.poster_url} />
        <ContentWrapper>
          <GenreBox genre={data.split_genre} />
          <ContentItem>
            <ContentTitle>상영시간</ContentTitle>
            <Content>{data.showtimes}</Content>
          </ContentItem>
          <ContentItem>
            <ContentTitle>상영등급</ContentTitle>
            <Content>{data.rate}</Content>
          </ContentItem>
          <ContentItem>
            <ContentTitle>개봉일</ContentTitle>
            <Content>{data.release_date}</Content>
          </ContentItem>
          <ContentItem>
            <ContentTitle>줄거리</ContentTitle>
            <Summary>{data.summary}</Summary>
          </ContentItem>
        </ContentWrapper>
      </DetailWrapper>
      <CommentWrapper></CommentWrapper>
      <ArrowBtn onClick={onClickArrow}>
        {direction ? (
          <FontAwesomeIcon icon={faAngleDown} />
        ) : (
          <FontAwesomeIcon icon={faAngleUp} />
        )}
      </ArrowBtn>
    </Container>
  ) : (
    <NotFoundPage />
  );
};

export default Detail;
