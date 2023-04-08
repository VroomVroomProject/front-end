import React, { useState } from 'react';

function useInput(init: string | boolean) {
  const [input, setInput] = useState<string | boolean>(init);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof init === 'string') {
      const { value } = e.currentTarget;
      setInput(value);
      return;
    }
    const { checked } = e.currentTarget;
    setInput(checked);
  };

  return {
    input,
    onChangeInput,
  };
}

export default useInput;
