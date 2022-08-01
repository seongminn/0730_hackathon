import { Btn } from './styled';

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Btn onClick={() => setPage(page - 1)} disabled={page === 0}>
        &lt;
      </Btn>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <Btn
            key={i}
            onClick={() => setPage(i)}
            style={{ color: i === page && '#be123c' }}
          >
            {i + 1}
          </Btn>
        ))}
      <Btn onClick={() => setPage(page + 1)} disabled={page === numPages - 1}>
        &gt;
      </Btn>
    </>
  );
};

export default Pagination;
