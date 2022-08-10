import React, { useState, useRef } from 'react';
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
} from './styled';
import Comment from '../comment';
import GenreBox from '../../shared/Genre';

const Detail = ({ data }) => {
  const [direction, setDirection] = useState(true);
  const detailRef = useRef(null);
  // const genre = data.genre.split(',');

  return (
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
            <Content>{data.summary}</Content>
          </ContentItem>
        </ContentWrapper>
      </DetailWrapper>
      <CommentWrapper></CommentWrapper>
      {/* <ArrowBtn onClick={onClickArrow}>
        {direction ? (
          <FontAwesomeIcon icon={faAngleDown} />
        ) : (
          <FontAwesomeIcon icon={faAngleUp} />
        )}
      </ArrowBtn> */}
    </Container>
  );
};

export default Detail;
