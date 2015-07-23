/**
 * Created by Hitrick on 23.07.2015 for project ya_map
 */
(function(window) {
	ymaps.ready(init);
	var myMap;
	var coords = [
		[55.76, 37.44],
		[55.16, 38.54],
		[55.46, 36.64],
		[55.71, 37.61],
		[56.19, 38.59],
		[54.29, 36.62]
	];
	function createMark(item) {
		var myPlacemark = new ymaps.Placemark(item, {
			hintContent: 'Content_random ' + Math.floor(Math.random()*100),
			balloonContent: 'content'
		});
		myMap.geoObjects.add(myPlacemark);
	}
	function init(){
		myMap = new ymaps.Map("map", {
			center: [55.76, 37.64],
			zoom: 7
		});
		coords.forEach(createMark);
	}

})(window);
