import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import Map from '@/components/Map';

function KakaoMap() {
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    setRender(true);
  }, []);

  if (typeof window === 'undefined') {
    return <></>;
  }

  return <>{render && <Map />}</>;
}

export default KakaoMap;
