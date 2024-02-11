import { useState, useRef } from "react";

const initialForm = {
    id: 0,
    date: '',
    content: '',
  };

const Schedules = () => {
    let id = useRef(4);

    const [schedules, setSchedules] = useState([
        {
            id: 1,
            date : '2024/02/11',
            content: '스케줄1',
        },
        {
            id: 2,
            date : '2024/02/12',
            content: '스케줄2',
        },
        {
            id: 3,
            date : '2024/02/13',
            content: '스케줄3',
        },
    ]);

    const [form, setForm] = useState(initialForm);

    const handleSubmit = (e) => {
        e.preventDefault();
        form.id = id.current++;
        //schedules.push(form);
        // 배열 concat 메서드 -> 추가하고 새로운 객체 반환
    
        setSchedules(schedules.concat(form));
        setForm({ ...initialForm });
      };

      const handleChange = (e) => {
        //form[e.currentTarget.name] = e.currentTarget.value;
        setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
      };

    return (
        <>
            <h1>스케줄 등록</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="date"
          placeholder="날짜"
          onChange={handleChange}
          value={form.date}
        />
        <input
          type="text"
          name="content"
          placeholder="내용"
          onChange={handleChange}
          value={form.content}
        />
        <button type="submit">
          등록하기
        </button>
      </form>
            <ul>
                {schedules.map(s => (
                    <li key={s.id}>
                        {s.date}/{s.content}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Schedules;