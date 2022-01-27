import "../css/main.css"

if (module.hot) {
  module.hot.accept();
}

const namePokemon = document.querySelector("h2")
const imgPokemon = document.querySelector("img")

const handleApiFetch = (arg) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${arg}`)
    .then(response => response.json())
    .then(data => {
      const { name, sprites } = data
      namePokemon.textContent = name;
      imgPokemon.src = sprites.front_default
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
