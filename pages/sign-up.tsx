import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import useCreateUserMutation from '@/hooks/useCreateUserMutation';
import useInput from '@/hooks/useInput';
import useSendEmailMutation from '@/hooks/useSendEmailMutation';
import { IEmailRequest } from '@/types/auth';
import React, { useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const userMutation = useCreateUserMutation();
  const emailSendMutation = useSendEmailMutation();

  const onSubmit: SubmitHandler<any> = data => {
    userMutation.mutate(data);
  };

  const { input: email, onChangeInput: onChangeEmail } = useInput('');

  const onSendEmail = useCallback(
    (e?: React.MouseEvent<HTMLButtonElement>) => {
      const request: IEmailRequest = {
        email: String(email),
      };
      emailSendMutation.mutate(request);
    },
    [email],
  );

  return (
    <form
      className="flex mt-32 flex-col w-34rem ml-auto mr-auto "
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input label="아이디" type="text" name="id" register={register} />
      <br></br>
      <Input
        label="비밀번호"
        type="password"
        name="password"
        register={register}
      />
      <br></br>

      <div className="flex">
        <Input type="email" value={String(email)} onChange={onChangeEmail} />
        <div className="ml-4 w-44">
          <Button type="button">
            <>인증번호 받기</>
          </Button>
        </div>
      </div>
      <br></br>
      <Button type="submit">
        <>가입하기</>
      </Button>
    </form>
  );
}

export default Signup;
