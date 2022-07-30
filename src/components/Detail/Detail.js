import React, { useState } from 'react';
import {
  DetailConDiv,
  DetailImgDiv,
  DetailLeftDiv,
  DetailMainConDiv,
  DetailMainDiv,
  DetailPoster,
  DetailRightDiv,
  DetailSpeBoxDiv,
  DetailSpeConDiv,
  DetailSpeContDiv,
  DetailSpeSumDiv,
  DetailSpeTitleDiv,
  DetailTitleConDiv,
  DetailTitleEngDiv,
  DetailTitleKorDiv,
  DetailStaffDiv,
  DetailStaffBtn,
} from './styledComponents';

function Detail({ data }) {
  return (
    <DetailConDiv>
      <DetailMainDiv>
        <DetailMainConDiv>
          <DetailLeftDiv>
            <DetailTitleConDiv>
              <DetailTitleKorDiv>{data.title_kor}</DetailTitleKorDiv>
              <DetailTitleEngDiv>{data.title_eng}</DetailTitleEngDiv>
            </DetailTitleConDiv>
            <DetailSpeBoxDiv>
              <DetailSpeConDiv>
                <DetailSpeTitleDiv>장르</DetailSpeTitleDiv>
                <DetailSpeContDiv>{data.genre}</DetailSpeContDiv>
              </DetailSpeConDiv>
              <DetailSpeConDiv>
                <DetailSpeTitleDiv>상영시간</DetailSpeTitleDiv>
                <DetailSpeContDiv>{data.showtimes}</DetailSpeContDiv>
              </DetailSpeConDiv>
              <DetailSpeConDiv>
                <DetailSpeTitleDiv>개봉일</DetailSpeTitleDiv>
                <DetailSpeContDiv>{data.release_date}</DetailSpeContDiv>
              </DetailSpeConDiv>
            </DetailSpeBoxDiv>
            <DetailSpeBoxDiv>
              <DetailSpeConDiv>
                <DetailSpeTitleDiv>관람객 평점</DetailSpeTitleDiv>
                <DetailSpeContDiv>{data.rating_aud}</DetailSpeContDiv>
              </DetailSpeConDiv>
              <DetailSpeConDiv>
                <DetailSpeTitleDiv>평론가 평점</DetailSpeTitleDiv>
                <DetailSpeContDiv>{data.rating_cri}</DetailSpeContDiv>
              </DetailSpeConDiv>
              <DetailSpeConDiv>
                <DetailSpeTitleDiv>네티즌 평점</DetailSpeTitleDiv>
                <DetailSpeContDiv>{data.rating_net}</DetailSpeContDiv>
              </DetailSpeConDiv>
            </DetailSpeBoxDiv>
            <DetailSpeBoxDiv>
              <DetailSpeConDiv>
                <DetailSpeTitleDiv>줄거리</DetailSpeTitleDiv>
                <DetailSpeSumDiv>{data.summary}</DetailSpeSumDiv>
              </DetailSpeConDiv>
            </DetailSpeBoxDiv>
          </DetailLeftDiv>
          <DetailRightDiv>
            <DetailImgDiv>
              <DetailPoster src={data.poster_url} />
            </DetailImgDiv>
            <DetailStaffDiv>
              <DetailStaffBtn>인물정보</DetailStaffBtn>
            </DetailStaffDiv>
          </DetailRightDiv>
        </DetailMainConDiv>
      </DetailMainDiv>
    </DetailConDiv>
  );
}

export default Detail;
