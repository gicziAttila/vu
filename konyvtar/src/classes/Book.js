export default class Book {
    #azon;
    #name;
    #authors;
    #img;

    constructor(azon, name, authors, img) {
        this.setAzon(azon);
        this.setName(name);
        this.setAuthors(authors);
        this.setImg(img);

        this.getAzon = this.getAzon.bind(this);
        this.getName = this.getName.bind(this);
        this.getAuthors = this.getAuthors.bind(this);
        this.getImg = this.getImg.bind(this);
        this.getEve = this.getEve.bind(this);
    }


    setAzon(azon) {
        this.#azon = azon;
    }
    setName(name) {
        this.#name = name;
    }
    setAuthors(authors) {
        this.#authors = authors;
    }
    setImg(img) {
        this.#img = img;
    }

    getAzon() {
        return this.#azon;
    }
    getName() {
        return this.#name;
    }
    getAuthors() {
        return this.#authors;
    }
    getImg() {
        return this.#img;
    }
    getEve() {
        return "Címe: " + this.getName() + " Szerzője: " + this.getAuthors() + " Azonosítója: " + this.getAzon()
    }

}