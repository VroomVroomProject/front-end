import { sendCheckedEmail } from '@/service/auth/post';
import React from 'react';
import { useMutation } from 'react-query';

function useSendEmailMutation() {
  const mutation = useMutation(sendCheckedEmail);
  return mutation;
}

export default useSendEmailMutation;
