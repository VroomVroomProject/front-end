import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import useInput from '@/hooks/useInput';
import React, { useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = data => {
    console.log(data);
  };

  const { input: email, onChangeInput: onChangeEmail } = useInput('');

  const onSendEmail = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {},
    [],
  );
  return (
    <form
      className="flex flex-col w-96 ml-auto mr-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input label="아이디" type="text" name="id" register={register} />
      <Input
        label="비밀번호"
        type="password"
        name="password"
        register={register}
      />
      <div>
        <Input
          label="이메일"
          type="email"
          value={String(email)}
          onChange={onChangeEmail}
        />
        <Button type="button">
          <>메일 인증</>
        </Button>
      </div>
      <Button type="submit">
        <>가입하기</>
      </Button>
    </form>
  );
}

export default Signup;
