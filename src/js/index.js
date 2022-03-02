import "../css/main.css"

if (module.hot) {
  module.hot.accept();
}

const apiUrl = "https://pokeapi.co/api/v2/pokemon/"
const wrapperCard = document.querySelector(".cards")


const addPokemonCard = (name, sprites, id, height, types, weight, base_experience) => {
  let cardPokemon = 
  `
    <article class="card">
      <div
        class="card__content ${types.map((type) => ` bg--${type.type.name}`).shift()}"
      >
        <figure class="card__image">
          <img
            src="${sprites.other.home.front_default}"
            alt="Pokemon name"
            class="card__thumbnail"
          >
        </figure>
        <div class="card__body">
          <h4 class="card__name">${name == 'raticate' ? 'el brayan' : name}</h4>
          <div class="card__wrapper-data">
            <div class="card__info">
              <p class="card__info-title">Número:</p>
              <p class="card__info-text">${id}</p>
            </div>
            <div class="card__info">
              <p class="card__info-title">Altura:</p>
              <p class="card__info-text">${height}</p>
            </div>
            <div class="card__info">
              <p class="card__info-title">Tipo:</p>
              <div>
              ${types.map((type) => `
                <span class="card__type bg--${type.type.name}">${type.type.name}</span>
              `).join('')}
              </div>
            </div>
            <div class="card__info">
              <p class="card__info-title">Peso:</p>
              <p class="card__info-text">${weight}</p>
            </div>
            <div class="card__info">
              <p class="card__info-title">Expriencia base:</p>
              <p class="card__info-text">${base_experience}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  `

  return cardPokemon
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const handleApiFetch = (arg) => {
  fetch(`${apiUrl}${arg}`)
  .then(response => response.json())
  .then(data => {
      const { name, sprites, id, height, types, weight, base_experience } = data
      removeAllChildNodes(wrapperCard);
      wrapperCard.innerHTML += addPokemonCard(name, sprites, id, height, types, weight, base_experience)
      console.log(data);
    })
}

const handleFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target)
  const valueName = formData.get('name')
  handleApiFetch(valueName)
}

const formSubmit = document.querySelector(".form");

formSubmit.addEventListener("submit", handleFormSubmit)

const handleInitApi = () => {
  for (var i = 1; i < 21; i++) {
    fetch(`${apiUrl}${[i]}`)
      .then(response => response.json())
      .then(data => {
        const { name, sprites, id, height, types, weight, base_experience } = data
        wrapperCard.innerHTML += addPokemonCard(name, sprites, id, height, types, weight, base_experience)
      })
    }
}

handleInitApi()