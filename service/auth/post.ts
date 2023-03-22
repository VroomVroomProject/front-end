import { IEmailRequest, IUserRequest } from '@/types/auth';
import { postService } from '..';

export const createUser = (data: IUserRequest) => {
  return postService('/das', data);
};

export const sendCheckedEmail = (data: IEmailRequest) => {
  return postService('/email', data);
};
