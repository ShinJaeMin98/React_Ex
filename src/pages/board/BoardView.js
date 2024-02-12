import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const BoardView = () => {
  const { id } = useParams();
  /*
  const location = useLocation();
  console.log(location.search); // 쿼리스트링 값

  const [searchParams, setSearchParams] = useSearchParams();
  const key = searchParams.get('key');
  const id2 = searchParams.get('id');

  console.log(key, id2);
    */
  return (
    <>
      <h1>게시글 보기..</h1>
      <h2>게시글 번호 : {id}</h2>
      <hr />
      <Outlet />
    </>
  );
};

export default BoardView;