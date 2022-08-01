import { useRef } from 'react';
import { Wrapper, Button } from './styled';

const MainController = ({ total, page, setPage }) => {
  const BtnBoxRef = useRef();

  return (
    <Wrapper
      ref={BtnBoxRef}
      height={BtnBoxRef.current ? BtnBoxRef.current.clientHeight : 4}
    >
      {/* <Button onClick={() => setPage(page - 1)} disabled={page === 0}>
        &lt;
      </Button> */}
      {Array(total + 1)
        .fill()
        .map((_, i) => (
          <Button
            onClick={() => setPage(i)}
            key={i}
            isactive={(page === i).toString()}
          >
            {i + 1}
          </Button>
        ))}
      {/* <Button onClick={() => setPage(page + 1)} disabled={page === total}>
        &gt;
      </Button> */}
    </Wrapper>
  );
};

export default MainController;
