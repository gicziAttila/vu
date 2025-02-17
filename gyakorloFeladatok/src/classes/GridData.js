export default class GridData{
    #name
    #power

    constructor(name, power) {
        this.setName(name);
        this.setPower(power)

        this.getName = this.getName.bind(this)
        this.getPower = this.getPower.bind(this);
    }



    setName(name){
        this.#name = name;
    }
    setPower(power){
        this.#power = power;
    }
    getName(){
        return this.#name;
    }
    getPower(){
        return this.#power
    }
}