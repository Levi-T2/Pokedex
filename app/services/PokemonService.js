import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";

class PokemonService {

    async getPokemonAPI() {
        const res = await pokeApi.get('pokemon?limit=200')
        console.log('Getting Pokemon', res.data)
        AppState.pokemon = res.data.results
    }

    async getPokemonByURL(pokemonName) {
        console.log(pokemonName)
        const res = await pokeApi.get(`pokemon/${pokemonName}`)
        console.log('Service: Got Mon', res.data)
        const newPokemon = new Pokemon(res.data)
        AppState.activePokemon = newPokemon
        console.log(AppState.activePokemon)
        AppState.emit('pokemonActive')
    }


}

export const pokemonService = new PokemonService()