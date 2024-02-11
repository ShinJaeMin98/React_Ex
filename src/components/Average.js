import React, { useState, useMemo, useCallback } from 'react';

const getAverage = (numbers) => {
  console.log('평균 구하는 함수 호출...');
  const total = numbers.reduce((a, b) => a + b, 0);
  console.log(total, numbers.length);
  const avg = Math.round((total / numbers.length) * 10) / 10;

  return avg;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState(0);

  const handleChange = useCallback((e) => setNumber(e.currentTarget.value), []); // 처음 마운트 될때 1번만 생성
  const handleClick = useCallback(
    () => setList(list.concat(Number(number))),
    [list, number],
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <>
      <input type="number" onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        평균 구하기
      </button>
      <ul>
        {list.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <div>평균 : {avg}</div>
    </>
  );
};

export default React.memo(Average);