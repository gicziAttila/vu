export default class Pokemon{
    #name
    #picture
    constructor(name, picture, type){
        this.setName(name)
        this.setPicture(picture)

        this.getName = this.getName.bind(this)
        this.getPicture = this.getPicture.bind(this)
    }
    setName(name){
        this.#name = name;
    }
    setPicture(picture){
        this.#picture = picture;
    }
    getName(){
        return this.#name;
    }
    getPicture(){
        return this.#picture
    }
}