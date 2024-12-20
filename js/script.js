const pokemonBtn = document.getElementById('get-pokemon')
const pokemonInfo = document.getElementById('pokemon-info')

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

const fetchPokemon = async () => {
    const pokemonName = document.getElementById('pokemon-select').value

    try {
        const response = await fetch(`${baseUrl}${pokemonName}`)
        const pokemonData = await response.json()

        const pokemonType = pokemonData.types.map(typeData => typeData.type.name).join(', ')

        const template = `
            <img src=${pokemonData.sprites.front_default} alt=${pokemonData.name}>
            <h2><span>Nombre: </span>${pokemonData.name}</h2>
            <p><span>Tipo: </span>${pokemonType}</p>
            <p><span>Altura: </span>${pokemonData.height}</p>
            <p><span>Peso: </span>${pokemonData.weight}</p>
        `
    
        pokemonInfo.innerHTML = template
    } catch (error) {
        console.error('Fetch pokemon FAILED', error)
    }

}

pokemonBtn.addEventListener('click', () => fetchPokemon())