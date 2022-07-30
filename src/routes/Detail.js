import { useParams } from 'react-router-dom';
import { datas, getDetail } from '../api';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
`;

const Poster = styled.img``;

const DesBox = styled.div``;

const Title = styled.h2``;

const GenreBox = styled.div``;

const Des = styled.p``;

const Stars = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;

  path {
    fill: #ffeaa7;
  }
`;

const Detail = () => {
  const { id } = useParams();

  // const { data, isLoading } = useQuery(['movie', `${id}`], () => getDetail(id));

  const data = {
    id: 2,
    title_kor: '로스트 도터',
    title_eng: 'THE LOST DAUGHTER, 2021',
    poster_url:
      'https://movie-phinf.pstatic.net/20220714_114/1657780525423jmTpw_JPEG/movie_image.jpg?type=m203_290_2',
    rating_aud: '7.78',
    rating_cri: '6.86',
    rating_net: '7.69',
    genre: '드라마',
    showtimes: '122분',
    release_date: '2022.07.14 개봉',
    summary:
      '그리스로 혼자 휴가를 떠난 대학 교수 레다는\n 딸을 가진 젊은 여자 니나를 보고 단번에 시선을 빼앗긴다.\n 매일 같은 해변에서 시간을 보내며 서로를 응시하던 두 사람,\n 갑자기 니나의 딸이 사라지고 레다는 옛 기억을 떠올린다.',
  };

  console.log(data);

  return (
    <Wrapper>
      <Poster src={data.poster_url} />
      <DesBox>
        <Title>
          {data.title_kor}
          <Stars>
            {[...Array(Math.trunc(Math.round(data.rating_aud) / 2))].map(
              (_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} />
              )
            )}
            {Math.trunc(Math.round(data.rating_aud) % 2) ? (
              <FontAwesomeIcon icon={faStarHalfStroke} />
            ) : null}
          </Stars>
          <Des>{data.summary}</Des>
        </Title>
      </DesBox>
    </Wrapper>
  );
};

export default Detail;
