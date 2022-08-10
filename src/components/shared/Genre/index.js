import React from 'react';
import { GenreItem, GenreWrapper } from './styled';
import COLOR from './../../../constants/color';

const GenreBox = ({ genre }) => {
  let color = `${COLOR.WHITE}`;
  let bg = `${COLOR['GRAY-100']}`;

  switch (genre) {
    case '액션':
      color = `${COLOR.WHITE}`;
      bg = `${COLOR.RED}`;
      break;
    case '드라마':
      color = `${COLOR.BLACK}`;
      bg = `${COLOR.MINT}`;
      break;
    case '미스터리':
      color = `${COLOR.WHITE}`;
      bg = `${COLOR['GRAY-300']}`;
      break;
    case '범죄':
      color = `${COLOR.WHITE}`;
      bg = `${COLOR['GRAY-300']}`;
      break;
    case '스릴러':
      color = `${COLOR.WHITE}`;
      bg = `${COLOR['GRAY-300']}`;
      break;
    case '다큐멘터리':
      color = `${COLOR.BLACK}`;
      bg = `${COLOR.MINT}`;
      break;
    case 'SF':
      color = `${COLOR.BLACK}`;
      bg = `${COLOR.BLUE}`;
      break;
    case '애니메이션':
      color = `${COLOR.BLACK}`;
      bg = `${COLOR.YELLOW}`;
      break;
    case '멜로/로맨스':
      color = `${COLOR.BLACK}`;
      bg = `${COLOR.MINT}`;
      break;
    case '코미디':
      color = `${COLOR.BLACK}`;
      bg = `${COLOR.YELLOW}`;
      break;
    case '뮤지컬':
      color = `${COLOR.BLACK}`;
      bg = `${COLOR.YELLOW}`;
      break;
    case '공연실황':
      color = `${COLOR.BLACK}`;
      bg = `${COLOR.YELLOW}`;
      break;
    case '서스펜스':
      color = `${COLOR.WHITE}`;
      bg = `${COLOR['GRAY-300']}`;
      break;
    case '판타지':
      color = `${COLOR.BLACK}`;
      bg = `${COLOR.BLUE}`;
      break;
    case '모험':
      color = `${COLOR.WHITE}`;
      bg = `${COLOR.RED}`;
      break;
    case '공포':
      color = `${COLOR.WHITE}`;
      bg = `${COLOR['GRAY-300']}`;
      break;
    default:
      color = `${COLOR.WHITE}`;
      bg = `${COLOR['GRAY-300']}`;
      break;
  }

  return (
    <GenreWrapper>
      {genre &&
        genre.map((el, index) => (
          <GenreItem key={index} color={color} bg={bg}>
            {el}
          </GenreItem>
        ))}
    </GenreWrapper>
  );
};

export default GenreBox;
