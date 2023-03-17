import Script from 'next/script';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import Modal from './common/Modal';

declare global {
  interface Window {
    kakao: any;
  }
}
function Map() {
  const containerRef = useRef<any>(null);
  const [open, setOpen] = useState(false);

  const initMap = useCallback(() => {
    if (true) {
      const map = new window.kakao.maps.Map(document.getElementById('map'), {
        center: new window.kakao.maps.LatLng(
          37.5173319258532,
          127.047377408384,
        ),
        level: 14,
      });
      containerRef.current = map;
      const marker1 = new window.kakao.maps.Marker({
        position: map.getCenter(),
      });
      const marker2 = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(33.450701, 126.570667),
      });
      const marker3 = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(37.5203081, 127.0366055),
      });

      marker1.setMap(map);
      marker2.setMap(map);
      marker3.setMap(map);
      // 지도에 클릭 이벤트를 등록합니다
      window.kakao.maps.event.addListener(marker1, 'click', function () {
        myLocationSearch();
      });
      //   window.kakao.maps.event.addListener(marker, 'click', function () {
      //     // 클릭한 위도, 경도 정보를 가져옵니다
      //     //   var latlng = mouseEvent.latLng;
      //     // 마커 위치를 클릭한 위치로 옮깁니다
      //     //   const infoWindow = new window.kakao.maps.InfoWindow({
      //     //     position: new window.kakao.maps.LatLng(latlng),
      //     //     content: 'I am InfoWindow',
      //     //   });
      //     //   infoWindow.open(map, marker);
      //     //   console.log(infoWindow);
      //   });
    }
  }, []);

  const myLocationSearch = () => {
    if ('geolocation' in navigator) {
      /* 위치정보 사용 가능 */

      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          containerRef.current.setCenter(
            new window.kakao.maps.LatLng(latitude, longitude),
          );
          containerRef.current.setLevel(4);
          const marker1 = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(latitude, longitude),
          });
          marker1.setMap(containerRef.current);
        },
        () => {
          /* 위치정보 사용 불가능 */
          console.log('dasdasds');

          setOpen(true);
        },
      );
    }
  };
  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=9b10b534165b0e2e7882db5155707c61&autoload=false`}
        onLoad={() => window.kakao.maps.load(initMap)}
      />
      <div id="map" style={{ height: '500px' }}></div>
      <Modal open={open} setOpen={setOpen}></Modal>
    </>
  );
}

export default Map;
