import axios from 'axios';
import { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.error(err));

    return () => {
      // 뒷정리 함수 -> 업데이트 전, 언마운트 전에 호출
      console.log('뒷정리 함수 호출...');
    };
  }, []);

  return (
    <ul>
      {posts.length > 0 && posts.map((p) => <li key={p.id}>{p.title}</li>)}
    </ul>
  );
};

export default Posts;