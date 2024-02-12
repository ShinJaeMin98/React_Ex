import Login from './pages/member/Login';
import Join from './pages/member/Join';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import CommonLayout from './layouts/CommonLayout';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

/*
import LifeCycle from './components/LifeCycle';


import ErrorBoundary from './components/ErrorBoundary';

import { useState } from 'react';


const App = () => {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
    
      <ErrorBoundary>
        <LifeCycle color="orange" number={10} />
        <button type="button" onClick={handleClick}>
          Toggle
        </button>
      </ErrorBoundary>
    </>
  );
};

export default App;
*/