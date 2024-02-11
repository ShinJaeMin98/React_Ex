import { useReducer } from 'react';
const INCREASE = 'counter/increase';
const DECREASE = 'counter/decrease';

const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });

function reducer(state, action) {
  switch (action.type) {
    case INCREASE: // 증가 액션
      return { number: state.number + 1 };

    case DECREASE: // 감소 액션
      return { number: state.number - 1 };

    default:
      return state;
  }
}

const Counter = () => {
  // state : 현재 상태 값, dispatch : 액션을 발생시키는 함수
  const [state, dispatch] = useReducer(reducer, { number: 0 });
  return (
    <>
      <h1>{state.number}</h1>
      <button type="button" onClick={() => dispatch(increase())}>
        +1
      </button>
      <button type="button" onClick={() => dispatch(decrease())}>
        -1
      </button>
    </>
  );
};

export default Counter;