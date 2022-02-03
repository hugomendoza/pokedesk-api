/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


if (false) {}

const wrapperCard = document.querySelector(".cards")
const apiUrl = "https://pokeapi.co/api/v2/pokemon/"


const addPokemonCard = (name, sprites) => {
  let cardPokemon = 
  `
    <article class="card">
      <div class="card__content card__content--fire">
        <figure class="card__image">
          <img
            src="${sprites.other.home.front_default}"
            alt="Pokemon name"
            class="card__thumbnail"
          >
        </figure>
        <div class="card__body">
          <h4 class="card__name">${name}</h4>
          <div class="card__wrapper-data">
            <div class="card__info">
              <p class="card__info-title">Número:</p>
              <p class="card__info-text">5</p>
            </div>
            <div class="card__info">
              <p class="card__info-title">Altura:</p>
              <p class="card__info-text">6</p>
            </div>
            <div class="card__info">
              <p class="card__info-title">Tipo:</p>
              <div>
                <span class="card__type">fire</span>
                <span class="card__type">flying</span>
              </div>
            </div>
            <div class="card__info">
              <p class="card__info-title">Peso:</p>
              <p class="card__info-text">20</p>
            </div>
            <div class="card__info">
              <p class="card__info-title">Expriencia base:</p>
              <p class="card__info-text">20</p>
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
      const { name, sprites } = data
      removeAllChildNodes(wrapperCard);
      wrapperCard.innerHTML += addPokemonCard(name, sprites)
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
        const { name, sprites } = data
        wrapperCard.innerHTML += addPokemonCard(name, sprites)
      })
    }
}

handleInitApi()
/******/ })()
;