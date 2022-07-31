import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

import {
  ConDiv,
  ImgDiv,
  LeftDiv,
  MainConDiv,
  MainDiv,
  Poster,
  RightDiv,
  SpeBoxDiv,
  SpeConDiv,
  SpeContDiv,
  SpeSumDiv,
  SpeTitleDiv,
  TitleConDiv,
  TitleEngDiv,
  TitleKorDiv,
  StaffConDiv,
  Star,
  RatBoxDiv,
  RatInboxDiv,
  StaffItemDiv,
  StaffItemImg,
  StaffItemName,
} from './styledComponents';
import Comment from './Comment';

function Detail({ data }) {
  const rating_sum =
    parseFloat(data.rating_aud) +
    parseFloat(data.rating_cri) +
    parseFloat(data.rating_net);

  return (
    <ConDiv>
      <MainDiv>
        <MainConDiv>
          <LeftDiv>
            <TitleConDiv>
              <TitleKorDiv>{data.title_kor}</TitleKorDiv>
              <TitleEngDiv>{data.title_eng}</TitleEngDiv>
            </TitleConDiv>
            <SpeBoxDiv>
              <SpeConDiv>
                <SpeTitleDiv>장르</SpeTitleDiv>
                <SpeContDiv>{data.genre}</SpeContDiv>
              </SpeConDiv>
              <SpeConDiv>
                <SpeTitleDiv>상영시간</SpeTitleDiv>
                <SpeContDiv>{data.showtimes}</SpeContDiv>
              </SpeConDiv>
              <SpeConDiv>
                <SpeTitleDiv>개봉일</SpeTitleDiv>
                <SpeContDiv>{data.release_date}</SpeContDiv>
              </SpeConDiv>
            </SpeBoxDiv>
            <SpeBoxDiv></SpeBoxDiv>
            <RatBoxDiv>
              <RatInboxDiv>
                <SpeConDiv>
                  <SpeTitleDiv>관람객 평점</SpeTitleDiv>
                  <SpeContDiv>{data.rating_aud}</SpeContDiv>
                </SpeConDiv>
                <SpeConDiv>
                  <SpeTitleDiv>평론가 평점</SpeTitleDiv>
                  <SpeContDiv>{data.rating_cri}</SpeContDiv>
                </SpeConDiv>
                <SpeConDiv>
                  <SpeTitleDiv>네티즌 평점</SpeTitleDiv>
                  <SpeContDiv>{data.rating_net}</SpeContDiv>
                </SpeConDiv>
              </RatInboxDiv>
              <RatInboxDiv>
                <SpeConDiv>
                  <SpeTitleDiv>총 평점</SpeTitleDiv>
                  <SpeContDiv>
                    {rating_sum > 0 && (
                      <Star>
                        {[
                          ...Array(
                            Math.trunc(Math.round(rating_sum / 3) / 1.5)
                          ),
                        ].map((_, index) => (
                          <FontAwesomeIcon key={index} icon={faStar} />
                        ))}
                        {Math.trunc(Math.round(rating_sum / 3) % 2) ? (
                          <FontAwesomeIcon icon={faStarHalfStroke} />
                        ) : null}
                      </Star>
                    )}
                  </SpeContDiv>
                </SpeConDiv>
              </RatInboxDiv>
            </RatBoxDiv>
            <SpeBoxDiv>
              <SpeConDiv>
                <SpeTitleDiv>줄거리</SpeTitleDiv>
                <SpeSumDiv>{data.summary}</SpeSumDiv>
              </SpeConDiv>
            </SpeBoxDiv>
          </LeftDiv>
          <RightDiv>
            <ImgDiv>
              <Poster src={data.poster_url} />
            </ImgDiv>
            <StaffConDiv>
              {data &&
                data.staff.slice(0, 3).map((el, index) => (
                  <StaffItemDiv key={index}>
                    <StaffItemImg url={el.image_url} />
                    <StaffItemName>
                      {el.name} - {el.role}
                    </StaffItemName>
                  </StaffItemDiv>
                ))}
            </StaffConDiv>
          </RightDiv>
        </MainConDiv>
        <Comment data={data} />
      </MainDiv>
    </ConDiv>
  );
}

export default Detail;
