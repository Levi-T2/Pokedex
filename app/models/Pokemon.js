
export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.url = data.url
        this.weight = data.weight
        this.order = data.order
        this.height = data.height
        this.id = data.id
        this.moves = data.moves
        this.abilities = data.abilities
        this.baseExperience = data.base_experience
        this.species = data.species
        this.sprites = data.sprites
        this.stats = data.stats
        this.types = data.types
        // this.species = data.species
        // this.forms = data.forms
        // this.gameIndices = data.game_indices
    }

    get ActiveTemplate() {
        return `<h1>${this.name}</h1>
        <div>
          <p>Height: ${this.height}</p>
          <p>Weight: ${this.weight}</p>
        </div>
        <div class='d-flex justify-content-around'>
        <p>Regular: <span>
        <img src="${this.sprites.front_default}">
        </span></p>
        <p>Shiny: <span>
          <img src="${this.sprites.front_shiny}">
          </span></p>
        </div>
        <div id='pokemonType'>
        
        </div>`
    }

}

