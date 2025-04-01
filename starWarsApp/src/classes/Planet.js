export default class Planet {
    #name
    #population
    #climate

    constructor(name, population, climate){
        this.setName(name)
        this.setPopulation(population)
        this.setClimate(climate)

        this.getName = this.getName.bind(this)
        this.getPopulation = this.getPopulation.bind(this)
        this.getClimate = this.getClimate.bind(this)
    }

    setName(name){
        this.#name = name
    }
    setPopulation(population){
        this.#population = population
    }
    setClimate(climate){
        this.#climate = climate
    }
    getName(){
        return this.#name
    }
    getPopulation(){
        return this.#population
    }
    getClimate(){
        return this.#climate
    }
}