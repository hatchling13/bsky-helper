import { LoaderFunctionArgs } from 'react-router-dom';
import { postData } from './placeholderData';

export const postDetailLoader = ({ params }: LoaderFunctionArgs) => {
  if (params.postId) {
    const post = postData.filter((post) => post.id === params.postId)[0];

    console.log(post);

    if (post) {
      return { data: post };
    }
  }

  throw new Error('Unexpected path variable');
};
