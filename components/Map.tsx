import Script from 'next/script';
import React, { useEffect, useState, useRef, useCallback } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}
function Map() {
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();
  const containerRef = useRef<HTMLDivElement>(null);

  const initMap = useCallback(() => {
    if (containerRef.current) {
      const map = new window.kakao.maps.Map(containerRef.current, {
        center: new window.kakao.maps.LatLng(
          37.5173319258532,
          127.047377408384,
        ),
        level: 14,
      });
      const marker1 = new window.kakao.maps.Marker({
        position: map.getCenter(),
      });
      const marker2 = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(33.450701, 126.570667),
      });
      const marker34 = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(33.450301, 126.570667),
      });

      marker1.setMap(map);
      marker2.setMap(map);
      marker34.setMap(map);

      // 지도에 클릭 이벤트를 등록합니다
      window.kakao.maps.event.addListener(
        marker,
        'click',
        function (mouseEvent: any) {
          // 클릭한 위도, 경도 정보를 가져옵니다
          //   var latlng = mouseEvent.latLng;
          // 마커 위치를 클릭한 위치로 옮깁니다
          //   const infoWindow = new window.kakao.maps.InfoWindow({
          //     position: new window.kakao.maps.LatLng(latlng),
          //     content: 'I am InfoWindow',
          //   });
          //   infoWindow.open(map, marker);
          //   console.log(infoWindow);
        },
      );
    }
  }, []);

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=9b10b534165b0e2e7882db5155707c61&autoload=false`}
        onLoad={() => window.kakao.maps.load(initMap)}
      />
      <div ref={containerRef} style={{ height: '500px' }}></div>
    </>
  );
}

export default Map;
