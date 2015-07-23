/**
 * Created by Hitrick on 23.07.2015 for project ya_map
 */
(function(window) {
	ymaps.ready(init);
	var myMap;
	var coords = [
		{
			data: [55.76, 37.44],
		   content: "<div><a href=\"#\">Placemark 1</a></div>"
		},
		{
			data: [55.16, 38.54],
			content: "Content -- "
		},
		{
			data: [55.46, 36.64],
			content: "Content -- "
		},
		{
			data: [55.71, 37.61],
			content: "Content -- "
		},
		{
			data: [56.19, 38.59],
			content: "Content -- "
		},
		{
			data: [54.29, 36.62],
			content: "Content -- "
		}
	];
	function createMark(item) {
		var rand = Math.floor(Math.random()*100);
		var myPlacemark = new ymaps.Placemark(item.data, {
			//hintContent: 'Content_random ' + rand,
			//balloonContent: item.content + rand
		});
		myMap.geoObjects.add(myPlacemark);
		myPlacemark.events.add('click', function(e) {
				var coords = e.get("coords");
				showHint(e, coords);
				myMap.panTo(coords, {duration: 1000});
			});
	}

	//function getClickCoords(e) {
	//	myMap.events.add("click", function(e) {
	//		var coords = e.get("coords");
	//		myMap.panTo(coords, {duration: 1000});
	//	});
	//}
	function showHint(e, coords) {
			myMap.balloon.close();
			var coords = e.get('coords');
			myMap.balloon.open(coords, {
				contentHeader:'Событие!',
				contentBody:'<p>Кто-то щелкнул по карте.</p>' +
				'<p>Координаты щелчка: ' + [
					coords[0].toPrecision(2),
					coords[1].toPrecision(2)
				].join(', ') + '</p>',
				contentFooter:'<sup>Made by Hitrick</sup>'
			});
		}


	function init() {
		myMap = new ymaps.Map("map", {
			center: [55.76, 37.64],
			zoom: 7
		});
		coords.forEach(createMark);
	}

})(window);
