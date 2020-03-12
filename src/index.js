document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //render all pokemon
  const pokemonContainer = document.querySelector("#pokemon-container")

// render one player to the DOM
function renderPokemon(pokemon) {
  // create an element for the outer div
  const pokeDiv = document.createElement("div")

  // set attributes on the outer div
  pokeDiv.className = "pokemon-card"

  // use innerHTML to create any child elements of the div
  pokeDiv.innerHTML = `
  <div class="pokemon-frame">
    <h1 class="center-text">${pokemon.name}</h1>
    <div class="pokemon-image">
      <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src=${pokemon.sprites.front}>
    </div>
  </div>
  `
  
  // append the element to the container
  pokemonContainer.append(pokeDiv)

  //flip
  pokeDiv.addEventListener("click", toggleImage)

  function toggleImage (e) {
    switch (e.target["src"]) {
      case pokemon.sprites.front:
        e.target["src"] = pokemon.sprites.back
        break;
      case pokemon.sprites.back:
        e.target["src"] = pokemon.sprites.front
        break;
    }
  }
}

// for each player in the array, render to the DOM
POKEMON.forEach(renderPokemon)


//search
const pokeForm = document.querySelector("#pokemon-search-form")

pokeForm.addEventListener("keyup", handleSearchInput)

function handleSearchInput(e) {
  searchedName = e.target.value

  filteredPokemon = POKEMON.filter(pokemon => pokemon.name.match(searchedName))

  pokemonContainer.innerHTML = '';
  filteredPokemon.forEach(renderPokemon)
}
})
