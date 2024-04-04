window.onload = async () => {
    const queryString = new URLSearchParams(document.location.search);
    const evolutionParameter = 'evolucao';

    for (const [key, value] of queryString) {
        if (key === evolutionParameter) {
            
            document.title += ` ${value}`;
            document.querySelector('#pokemon-titulo').textContent += value;

            fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
                .then(async (response) => {
                    const pokemonInformation = await response.json();
                    const pokemonElementSection = document.querySelector('#evolucao-section')
                    const elementImage = document.createElement('img')
                    elementImage.src = pokemonInformation.sprites.front_default;
                    elementImage.alt = `Imagem da evolução ${value}`;
                    elementImage.role = 'img';
                    pokemonElementSection.appendChild(elementImage);
                })
        }
    }
}