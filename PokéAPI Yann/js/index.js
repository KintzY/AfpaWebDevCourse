const maxPokemon = 252;

$(document).ready(function () {
	// Check if there is a gallery
	if ($("#gallery").length) {
		for (var i = 1; i < maxPokemon; i++) {
			getPokeCard(i);
		}
	}
	// Check if there is a pokecard
	if ($("#poke-card").length) {
		var num = $(location).attr("href").split("?")[1];
		getPokeData(num);
	}
	setDate();
});

//
/**
 * Get the data from the API for the gallery
 * @param num number from the index
 */
function getPokeCard(num) {
	$.ajax({
		url: `http://pokeapi.co/api/v2/pokemon/${num}/`,
		method: "GET",
		dataType: "json"
	})
		.done(function (response) {
			var id = response.id,
				sprite = response.sprites.other["official-artwork"].front_default,
				name = response.name;

			createPokeCard(id, sprite, name);
		})
		.fail(function (error) {
			console.log("operation failed " + +JSON.stringify(error));
		});
}

/**
 * Create card once called
 * @param id id of the pokemon
 * @param image link to the image
 * @param name name of the pokemon
 */
function createPokeCard(id, image, name) {
	$(gallery).append(`
		<div class="col">
			<a href="PokeData.html?${id}">
				<div class="card">
					<img src="${image}" class="card-img-top" alt="${name}" loading="lazy"/>
					<div class="card-body">
						<h5 class="card-title">N° ${id} ${name}</h5>
					</div>
				</div>
			</a>	
		</div>
		`);
}

/**
 * Get the data from the API for the pokecard
 * @param num number from the index
 */
function getPokeData(num) {

	$.ajax({
		url: `http://pokeapi.co/api/v2/pokemon/${num}/`,
		method: "GET",
		dataType: "json"
	})
		.done(function (response) {
			var id = response.id,
				sprite = response.sprites.other["official-artwork"].front_default,
				species = response.species.name,
				height = response.height,
				weight = response.weight,
				name = response.name,
				firstStatName = response.stats[0].stat.name,
				baseStat = response.stats[0].base_stat,
				effort = response.stats[0].effort;

			setPokeData(id, sprite, name, species, height, weight, firstStatName, effort, baseStat);
	})
		.fail(function (error) {
			console.log("operation failed " + +JSON.stringify(error));
	});;
}

// Set data once called
function setPokeData(id, image, name, species, height, weight, firstStatName, effort, baseStat) {
	$("#poke-shot").attr("src", image);
	$("#poke-name").html("N° " + id + " " + name);
	$("#poke-weight").html("Weight = " + weight);
	$("#poke-height").html("Height = " + height);
	$("#poke-species").html("Species = " + species);
	$("#poke-effort").html(firstStatName + " EV Stats = " + effort);
	$("#poke-base-stat").html(firstStatName + " Base Stats = " + baseStat);
}

// Check and set date
function setDate() {
	var date = new Date();

	let dateLocale = date.toLocaleString("fr-FR", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	$("#date").html(dateLocale);
}
