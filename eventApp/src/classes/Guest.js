export default class Guest{
    #name;
    #email;
    #pet;

    constructor(name, email, pet){
        this.setName(name);
        this.setEmail(email);
        this.setPet(pet);
    }

    setName(name){
        this.#name = name;
    }
    setEmail(email){
        this.#email = email;
    }
    setPet(pet){
        this.#pet = pet;
    }

    getName(){
        return this.#name;
    }
    getEmail(){
        return this.#email;
    }
    getPet(){
        return this.#pet;
    }
}