import { instance } from '../instance';

const postService = async data => {
  const res = await instance.post('/?????', data);
  return res.data;
};
