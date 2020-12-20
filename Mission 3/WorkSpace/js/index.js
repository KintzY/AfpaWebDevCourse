/*
	* Yann
	* Lubuntu: 20.10
	* Firefox: 83.0
	* Chromium: 87.0

	//!!TODO: CLEAN THIS MESS!!
	//TODO: Keep one modal and change it's property accordingly and prepend the card
	//TODO: Try to not lunch the modal when clicking on the hover card cart 
	//TODO: Fix the sidebar glitch
	//TODO: allow delete of cart card
	//TODO: sidebar scroller overflow
	//TODO: fix cart bug
	//TODO: ajax weather widget
	//TODO: fix empty image on card
	//TODO: close modal after clicking buy button
	//TODO: fix meteo widget depth
	//TODO: chaining
	//TODO: callbacks
	TODO: QUnit 
	TODO: total and checkout
	TODO: filter and sort 
	TODO: better loading
	TODO: progressive loading
	TODO: cart notification
	TODO: sidebar login
	TODO: fix buy card and modal
	!should have used contructor
*/


  const srcImg = "images/"; // emplacement des images de l'appli
  const albumDefaultMini = srcImg + "noComicsMini.jpeg";
  const albumDefault = srcImg + "noComics.jpeg";
  const srcAlbumMini = "albumsMini/"; // emplacement des images des albums en petit
  const srcAlbum = "albums/"; // emplacement des images des albums en grand

  getEntries(albums, "#gallery", createCard);
  getLocation();

  function createCard(where, key, album, serie, auteur, nomFic) {
    $(where).append(`
			<div  
				id="${key}" 
				class="album-min card-image p-2 col-6 col-sm-3 col-xl-2"
				type="button"
				data-backdrop="static"
				data-toggle="modal"
				data-target="#key${key}"
			>
				<img
					class="image-min card-img-top m-auto "
					loading="lazy"
					src="${srcAlbumMini + nomFic + ".jpg"}"
					alt=""
				/>
				<div class="card-img-overlay p-2">
					<div class="card-header p-2">
						<h6 class="card-title">${album.titre}</h6>
					</div>
					
					<div class="card-body p-2">
						<p class="card-text">${serie.nom + " N° " + album.numero}</p>
						<p class="card-text">${auteur.nom}</p>    
					</div>
					<div class="card-footer text-right p-2 mb-0">
						<button id="card-buy${key}" type="button" class="btn btn-success">
						${album.prix} &#8364; &#128722;
						</button>
					</div>
				</div>
			</div>
		`);
  }

  function getEntries(bdd, where, callback) {
    for (const [key, album] of bdd.entries()) {
      var serie = series.get(album.idSerie);
      var auteur = auteurs.get(album.idAuteur);
      var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;
      nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");
      callback(where, key, album, serie, auteur, nomFic);
    }
  }

  function createCartItem(album, where, nomFic) {
    $(where).append(`
			<div class="card item-cart m-1">
				<div class="row no-gutters">
					<div class="col-4">
						<img class="image-min card-img"
							src="${srcAlbumMini + nomFic + ".jpg"}" 
							alt="${album.titre}">
					</div>
					<div class="col-8">
						<div class="card-body p-1">
							<p class="card-text">${album.titre}</p>
							<p class="card-text">${album.prix}&#8364;</p>
							<button type="button" class="delete btn p-0 btn-danger">
								<span>&times;</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		`);
  }

  function getCartItemValues(key, where, callback) {
    var album = albums.get(key);
    var serie = series.get(album.idSerie);

    var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;
    nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");
    callback(album, where, nomFic);
  }

  function changeModale(key) {
    var album = albums.get(key);
    var serie = series.get(album.idSerie);
    var auteur = auteurs.get(album.idAuteur);

    var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;
    nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");

    $(".album-full").attr("id", "key" + key);
    $(".image-full").attr("src", srcAlbum + nomFic + ".jpg");
    $(".image-full").attr("alt", album.titre);
    $("#titre").html(album.titre);
    $("#serie").html(serie.nom + " N° " + album.numero);
    $("#auteur").html(auteur.nom);
    $("button[id^='modal-buy']").attr("id", "modal-buy" + key);
    $("button[id^='modal-buy']").html(album.prix + "&#8364; &#128722;");
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeather);
    } else {
      alert("Geolocation not supported by this browser");
    }
  }

  function getWeather(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var API_KEY = "df1cc7dcbb602dbc33835dd2b89a3504";
    var baseURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric&lang=fr `;

    $.get(baseURL, function (res) {
      var data = res;
      var icone = data.weather[0].icon;
      var temp = data.main.temp;
      var condition = data.weather[0].description;
      var ville = data.name;
      var pays = data.sys.country;

      $("#icon-meteo").attr("src", `http://openweathermap.org/img/wn/${icone}.png`);
      $("#temperature").html(`${temp}°C`);
      $("#condition").html(condition);
      $("#ville").html(ville);
      $("#pays").html(pays);
    });
  }

  function sidebarTogglers() {
    if ($(this).is(".open-setting") || $(this).parent().is(".open-setting")) {
      $(".sidebar-setting").toggleClass("active");
      $(".overlay").toggleClass("active");
      $(".sidebar-cart").removeClass("active");
    } else if ($(this).is(".open-cart") || $(this).parent().is(".open-cart")) {
      $(".sidebar-cart").toggleClass("active");
      $(".overlay").toggleClass("active");
      $(".sidebar-setting").removeClass("active");
    } else {
      $(".sidebar-setting").removeClass("active");
      $(".sidebar-cart").removeClass("active");
      $(".overlay").removeClass("active");
    }
  }

  function errorImg() {
    if ($(this).hasClass("image-min")) {
      $(this).attr("src", albumDefaultMini);
    } else if ($(this).hasClass("image-full")) {
      $(this).attr("src", albumDefault);
    }
  }

  function deleteCartItem() {
    $(this).closest(".item-cart").remove();
  }

  function search() {
    var value = $(this).val().toLowerCase();
    $("#gallery .album-min").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  }

  $(".open-setting, .open-cart, .overlay").on("click", sidebarTogglers);

  $("#search").on("keyup", search);

  $(".sidebar-cart").on("click", ".delete", deleteCartItem);

  $(".album-min").on("click", function () {
    var key = $(this).attr("id");
    changeModale(key);
  });

  $("button[id^='card-buy']").on("click", function () {
	var key = $(this).attr("id").replace("card-buy", "");
    getCartItemValues(key, ".sidebar-cart", createCartItem);
  });

  $("button[id^='modal-buy']").on("click", function () {
    var key = $(this).attr("id").replace("modal-buy", "");
    getCartItemValues(key, ".sidebar-cart", createCartItem);
  });

  $(".image-min, .image-full").on("error", errorImg);
