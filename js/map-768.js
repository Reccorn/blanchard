ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map('map-768', {
    center: [55.75991743174908,37.60745011920072],
    zoom: 14,
  });

  var myPlacemark = new ymaps.Placemark([55.75846306898368,37.601079499999905], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/placemark.png',
    iconImageSize: [20, 20]
  });

  myMap.geoObjects.add(myPlacemark);
}