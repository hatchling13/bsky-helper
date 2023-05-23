import { LoaderFunctionArgs } from 'react-router-dom';
import { postData } from './placeholderData';

export const postDetailLoader = ({ params }: LoaderFunctionArgs) => {
  if (params.postId) {
    const post = postData.filter((post) => post.id === params.postId)[0];

    if (post) {
      return { data: post };
    }
  }

  throw new Error('Unexpected path variable');
};

export const getPosts = () => {
  const result = postData.map((value) => {
    return { data: value };
  });

  return result;
};
