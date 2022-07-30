import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import styled from 'styled-components';

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

const Search = () => {
  const iconRef = useRef();

  return (
    <Form>
      <Input placeholder="What do you want to watch?" />
      <Btn
        ref={iconRef}
        style={{
          position: 'absolute',
          right: '20px',
          top: `calc(50% - ${iconRef.current?.clientHeight / 2}px)`,
        }}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Btn>
    </Form>
  );
};

export default Search;
