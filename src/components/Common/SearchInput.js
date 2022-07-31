import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { searchState } from '../../atom';

const Form = styled.form`
  position: relative;
  width: 40%;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  border-radius: 6px;
  background-color: transparent;
  border: 1px solid #fff;
  outline: none;
  font-size: 18px;
  color: #fff;

  &::placeholder {
    font-family: 'BMHANNAAir', sans-serif;
    color: #fff;
  }
`;

const Btn = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
`;

const SearchInput = () => {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState([]);
  const [search, setSearch] = useRecoilState(searchState);
  const navigate = useNavigate();
  // const iconRef = useRef();
  const onChangeKeyword = e => {
    setKeyword(e.target.value);
  };

  const onSearch = async e => {
    e.preventDefault();
    setSearch(keyword);
    navigate('/search');
    setKeyword('');
  };

  return (
    <Form onSubmit={onSearch}>
      <Input
        placeholder="What do you want to watch?"
        value={keyword}
        minLength="2"
        onChange={onChangeKeyword}
        required
      />
      {/* <Btn
        ref={iconRef}
        style={{
          position: 'absolute',
          right: '20px',
          top: `calc(50% - ${iconRef.current?.clientHeight / 2}px)`,
        }}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Btn> */}
    </Form>
  );
};

export default SearchInput;
