/**
 * Created by Hitrick on 23.07.2015 for project ya_map
 */
(function(window) {
	ymaps.ready(init);
	var myMap;
	var coords = [
		{
			data: [55.76, 37.44],
		   content: "Content 1"
		},
		{
			data: [55.16, 38.54],
			content: "Content 2"
		},
		{
			data: [55.46, 36.64],
			content: "Content 3"
		},
		{
			data: [55.71, 37.61],
			content: "Content 4"
		},
		{
			data: [56.19, 38.59],
			content: "Content 5"
		},
		{
			data: [54.29, 36.62],
			content: "Content 6"
		}
	];
	function getContent(arr, str) {
		var content = "<div class=\"baloon_content\">";
		arr.forEach(function(item) {
			if(item.content !== str) {
				content += "<p data-coords=" + item.data.join('-') + ">" + item.content + "</p>";
			}
		});
		content += "</div>";
		return content;
	}
	function createMark(item) {
		var rand = Math.floor(Math.random()*100);
		var myPlacemark = new ymaps.Placemark(item.data, {
			hintContent: item.content
		});
		myMap.geoObjects.add(myPlacemark);
		myPlacemark.events.add('click', function(e) {
				var coords = e.get("coords");
				showHint(e, myPlacemark.properties._6c.hintContent);
				myMap.panTo(coords, {duration: 1000});
			});
	}
	function showHint(e, str) {
			myMap.balloon.close();
			var crds = e.get('coords');
			myMap.balloon.open(crds, {
				contentHeader:'Метки!',
				contentBody:getContent(coords, str),
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
