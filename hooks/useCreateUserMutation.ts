import { createUser } from '@/service/auth/post';
import React from 'react';
import { useMutation } from 'react-query';

function useCreateUserMutation() {
  const mutation = useMutation(createUser, {
    onSuccess: (data, variables, context) => {
      console.log(data);
      console.log(variables);
      console.log(context);
    },
    onError: (error, variables, context) => {
      console.error(error);
      console.error(variables);
      console.error(context);
    },
  });

  return mutation;
}

export default useCreateUserMutation;
