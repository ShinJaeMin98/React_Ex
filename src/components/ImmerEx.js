import { useState } from 'react';
import { produce } from 'immer';

const ImmerEx = () => {
  const [data, setData] = useState({
    data1: { a: 1, b: 2 },
    data2: { c: 3, d: 4 },
    array: [10, 20, 30, 40],
  });

  const handleClick = () => {
    /*
    setData({
      data1: { ...data.data1, b: data.data1.b * 10 },
      data2: { ...data.data2 },
    });
    */
    setData(
      produce((draft) => {
        draft.data1.b = data.data1.b * 10;
      }),
    );
  };

  const handleClick2 = () => {
    setData(
      produce((draft) => {
        draft.array.push(50);
      }),
    );
  };

  return (
    <>
      a: {data.data1.a}
      <br />
      b: {data.data1.b}
      <br />
      c: {data.data2.c}
      <br />
      d: {data.data2.d}
      <br />
      <button type="button" onClick={handleClick}>
        b X 10
      </button>
      <ul>
        {data.array.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <button type="button" onClick={handleClick2}>
        +50
      </button>
    </>
  );
};

export default ImmerEx;