import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { searchState } from '../../../atom';
import { Form, Input, Btn } from './styled';

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
