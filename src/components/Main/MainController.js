import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 35px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 999;
`;

const Button = styled(motion.button)`
  z-index: 99;
  color: white;
  border: none;
  background-color: transparent;
  font-weight: 700;
  position: relative;
  color: #9ca3af;

  ${props => {
    if (props.isactive === 'true') {
      return css`
        & {
          color: white;
        }
        &::before {
          content: '';
          height: 3px;
          width: 20px;
          top: 0.5em;
          left: -20px;
          position: absolute;
          background-color: white;
          color: white;
        }
      `;
    }
  }};
`;

const MainController = ({ total, page, setPage }) => {
  return (
    <Wrapper>
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
