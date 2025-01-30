export default class Product {
    #name
    #price
    #piece

    constructor(name, price, piece) {
        this.setName(name)
        this.setPrice(price)
        this.setPiece(piece)

        this.getName = this.getName.bind(this)
        this.getPrice = this.getPrice.bind(this)
        this.getPiece = this.getPiece.bind(this)
        this.setPiece = this.setPiece.bind(this)
    }
    
    getName(){return this.#name}
    getPrice(){return this.#price}
    getPiece(){return this.#piece}
    setName(name){this.#name = name}
    setPrice(price){this.#price = price}
    setPiece(piece){this.#piece = piece}
}