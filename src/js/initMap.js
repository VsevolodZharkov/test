function initMap() {
	const uluru = { lat: 43.45109870877214, lng: -80.51355644437547 };
	const mapOptions = {
		zoom: 17,
		center: new google.maps.LatLng(uluru),
		styles: [
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
			},
			{
				featureType: "landscape",
				elementType: "geometry",
				stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
			},
			{
				featureType: "road.highway",
				elementType: "geometry.fill",
				stylers: [{ color: "#ffffff" }, { lightness: 17 }],
			},
			{
				featureType: "road.highway",
				elementType: "geometry.stroke",
				stylers: [
					{ color: "#ffffff" },
					{ lightness: 29 },
					{ weight: 0.2 },
				],
			},
			{
				featureType: "road.arterial",
				elementType: "geometry",
				stylers: [{ color: "#ffffff" }, { lightness: 18 }],
			},
			{
				featureType: "road.local",
				elementType: "geometry",
				stylers: [{ color: "#ffffff" }, { lightness: 16 }],
			},
			{
				featureType: "poi",
				elementType: "geometry",
				stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
			},
			{
				featureType: "poi.park",
				elementType: "geometry",
				stylers: [{ color: "#dedede" }, { lightness: 21 }],
			},
			{
				elementType: "labels.text.stroke",
				stylers: [
					{ visibility: "on" },
					{ color: "#ffffff" },
					{ lightness: 16 },
				],
			},
			{
				elementType: "labels.text.fill",
				stylers: [
					{ saturation: 36 },
					{ color: "#333333" },
					{ lightness: 40 },
				],
			},
			{ elementType: "labels.icon", stylers: [{ visibility: "off" }] },
			{
				featureType: "transit",
				elementType: "geometry",
				stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
			},
			{
				featureType: "administrative",
				elementType: "geometry.fill",
				stylers: [{ color: "#fefefe" }, { lightness: 20 }],
			},
			{
				featureType: "administrative",
				elementType: "geometry.stroke",
				stylers: [
					{ color: "#fefefe" },
					{ lightness: 17 },
					{ weight: 1.2 },
				],
			},
		],
	};
	const mapElement = document.getElementById("map");

	const map = new google.maps.Map(mapElement, mapOptions);

	const marker = new google.maps.Marker({
		position: new google.maps.LatLng(uluru),
		map: map,
		icon: "./img/marker.png",
	});

	const InfoWindow = new google.maps.InfoWindow({
		content: `<div class="info">
								<div class="info_container">
									<p class="info_text">Voodoo</p>
									<p class="info_adress">137 Glasgow St., Unit 115 <br>Kitchener, ON N2G 4X8<br>Ukraine</p>
									<ul class="auth">
										<li class="auth__point">
											<a class="auth__link-contakt" href="tel:1-800-480-9597">
														<svg class="auth__acon phone">
																<use href="./svg/symbol-defs.svg#icon-phone">
																</use>
														</svg>
														1-800-480-9597
												</a>
										</li>
										<li class="auth__point">
											<a class="auth__link-contakt" href="mailto:info@voodoo.com">
														<svg class="auth__acon email">
																<use href="./svg/symbol-defs.svg#icon-mail">
																</use>
														</svg>
														info@voodoo.com
												</a>
										</li>
								</ul>
							</div>
						</div>`,
		ariaLabel: uluru,
	});

	InfoWindow.open(map, marker);

	marker.addListener("click", function () {
		InfoWindow.open(map, marker);
	});
}

window.initMap = initMap;