import { ActionFunctionArgs, redirect } from 'react-router-dom';

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();

  console.log(form);

  return redirect('/timeline');
};
