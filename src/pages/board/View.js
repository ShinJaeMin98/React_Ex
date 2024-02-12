import { useParams } from 'react-router-dom';

const posts = {
  [`post_100`]: '게시글1',
  [`post_200`]: '게시글2',
  [`post_300`]: '게시글3',
};
const View = () => {
  const { id } = useParams();

  return <h1>{posts[`post_${id}`]}</h1>;
};

export default View;