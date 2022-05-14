import React from "react";

const Map = () => {
  return (
    <section class="map">
      <div style="position:relative;overflow:hidden;">
        <a
          href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
          style="color:#eee;font-size:12px;position:absolute;top:0px;"
        >
          Ташкент
        </a>
        <a
          href="https://yandex.uz/maps/10335/tashkent/?from=api-maps&ll=69.228787%2C41.262379&mode=usermaps&origin=jsapi_2_1_79&um=constructor%3Ae24db8d50b7ab109cb518a5ff519a41f75018ab0c219188288c5132aeb46eae6&utm_medium=mapframe&utm_source=maps&z=16"
          style="color:#eee;font-size:12px;position:absolute;top:14px;"
        >
          Яндекс Карты — транспорт, навигация, поиск мест
        </a>
        <iframe
          src="https://yandex.uz/map-widget/v1/-/CCUFZODNhA"
          width="100%"
          height="400"
          frameborder="1"
          allowfullscreen="false"
          style="position:relative;"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
