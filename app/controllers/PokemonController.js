import { AppState } from "../AppState.js"
import { pokemonService } from "../services/PokemonService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawPokemon() {
    const pokemon = AppState.pokemon
    let content = ''
    pokemon.forEach(pokemon => content += ` <div class="text-center mb-2">
    <button onclick="app.PokemonController.getPokemonByURL('${pokemon.name}')" class="btn btn-primary rounded w-100">${pokemon.name}</button>
  </div>`)

    setHTML('pokemonList', content)
}

function _drawActivePokemon() {
    setHTML('pokemonActive', AppState.activePokemon.ActiveTemplate)
    _drawPokemonTypes()
}

function _drawPokemonTypes() {
    let content = ''
    const pokemon = AppState.pokemon
    console.log(pokemon)
    pokemon.forEach(pokemon => content += `<p>${pokemon.types[0].name}</p>`)

    setHTML('pokemonType', content)
}

export class PokemonController {
    constructor() {
        console.log('Pokemon Controller Loaded')
        this.getPokemonAPI()

        AppState.on('account', _drawPokemon)
        // AppState.on('pokemonActive', _drawActivePokemon)
    }

    async getPokemonAPI() {
        try {
            await pokemonService.getPokemonAPI()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    async getPokemonByURL(pokemonName) {
        try {
            await pokemonService.getPokemonByURL(pokemonName)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
        _drawActivePokemon()
    }
}