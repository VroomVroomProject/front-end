import React, { useState } from 'react';

function useActive() {
  const [active, setActive] = useState<boolean>(false);
  const onActive = () => {
    setActive(p => !p);
  };

  return [active, onActive];
}

export default useActive;
