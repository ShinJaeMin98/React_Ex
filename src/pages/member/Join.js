import { Helmet } from 'react-helmet-async';
//import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // 훅

const Join = () => {
  const navigate = useNavigate();

  const isLogin = false;
  if (!isLogin) {
    //return <Navigate to="/login" replace={true} />;
    navigate('/login', { replace: true });  // true: 히스토리 기록 X

    /**
     * navigate(-1) -> 뒤로 1단계 이동 history.back();
     * navigate(1) -> 앞으로 1단계 이동 history.forward();
     *
     */
  }

  return (
    <>
      <Helmet>
        <title>회원가입</title>
      </Helmet>
      <h1>회원가입 페이지...</h1>
    </>
  );
};

export default Join;