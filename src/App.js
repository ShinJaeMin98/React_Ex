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
    
      {/* <ErrorBoundary> */}
        <LifeCycle color="orange" number={10} />
        <button type="button" onClick={handleClick}>
          Toggle
        </button>
      {/* </ErrorBoundary> */}
    </>
  );
};

export default App;