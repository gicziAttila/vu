export default class Termekek{
    #termekNeve;
    #termekAra;

    constructor(termekNeve, termekAra){
        this.setTermekNeve(termekNeve);
        this.setTermekAra(termekAra);
    }
    setTermekNeve(termekNeve){
        this.#termekNeve = termekNeve;
    }
    setTermekAra(termekAra){
        this.#termekAra = termekAra;
    }
    getTermekNeve(){
        return this.#termekNeve;
    }
    getTermekAra(){
        return this.#termekAra;
    }
}