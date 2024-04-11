import { updateLocalStorageWithVisitorData, insertVisitorDataOnFooter } from "./visitor.js";

const evolutionParameter = 'evolucao';
let pokemonSprites = [];
let quantityPokemonSprites = 0;
let currentSpriteIndex = 0;
let pokemonName = "";

window.onload = async () => {
    const queryString = new URLSearchParams(document.location.search);

    for (const [key, value] of queryString) {
        if (key === evolutionParameter) {

            pokemonName = value;
            document.title += ` ${pokemonName}`;
            document.querySelector('#pokemon-titulo').textContent += pokemonName;

            try {
                const pokemonInformation = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
                const pokemonInformationJson = await pokemonInformation.json();
                const spritesValues = Object.values(pokemonInformationJson.sprites);
                pokemonSprites = spritesValues.filter((value) => typeof (value) === 'string');
                quantityPokemonSprites = pokemonSprites.length;
            } catch (error) {
                console.error("An error occurred when getting pokemon information");
            }

            const pokemonElementSection = document.querySelector('#evolucao-section')
            const imageElement = createPokemonImageElement();
            pokemonElementSection.appendChild(imageElement);
        }
    }
    const visitorData = updateLocalStorageWithVisitorData();
    insertVisitorDataOnFooter(visitorData);
}

function createPokemonImageElement() {
    const imageElement = document.createElement('img')
    imageElement.src = pokemonSprites[currentSpriteIndex];
    imageElement.alt = `Imagem da evolução ${pokemonName}`;
    imageElement.role = 'img';
    imageElement.addEventListener('click', () => {
        currentSpriteIndex++;
        if (currentSpriteIndex >= quantityPokemonSprites) {
            currentSpriteIndex = 0;
        }
        imageElement.src = pokemonSprites[currentSpriteIndex];
    });
    return imageElement;
}