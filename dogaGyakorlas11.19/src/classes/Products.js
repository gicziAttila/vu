export default class Products{
    #id
    #name
    #price
    #img

    constructor(id, name, price, img){
        this.setId(id)
        this.setName(name)
        this.setPrice(price)
        this.setImg(img)

        this.getId = this.getId.bind(this)
        this.getName = this.getName.bind(this)
        this.getPrice = this.getPrice.bind(this)
        this.getImg = this.getImg.bind(this)
    }


    setId(id){
        this.#id=id
    }
    setName(name){
        this.#name=name
    }
    setPrice(price){
        this.#price=price
    }
    setImg(img){
        this.#img=img
    }

    getId(){
        return this.#id
    }
    getName(){
        return this.#name
    }
    getPrice(){
        return this.#price
    }
    getImg(){
        return this.#img
    }

}