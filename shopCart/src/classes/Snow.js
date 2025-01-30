export default class Snow{
    #x;
    #y;
    #speed;
    #container;
    #element;
    #fallInterval;

    constructor(x, y, speed, container){
        this.setX(x);
        this.setY(y);
        this.setSpeed(speed);
        this.setContainer(container);
        this.createSnow();

    }


    setX(x){
        this.#x = x;
    }
    setY(y){
        this.#y = y;
    }
    setSpeed(speed){
        this.#speed = speed;
    }
    setContainer(container){
        this.#container = document.querySelector(container);
        /* 
            Ha a paraméter: #gameArea
            document.querySelector("#gameArea");
            Ha a paraméter: .gameArea
            document.querySelector(".gameArea");
         */
    }


    createSnow(){
        this.#element = document.createElement("div");
        this.#element.classList.add("snow");
        this.#element.style.left = this.#x + "px";
        this.#element.style.top = this.#y + "px";
        this.#container.appendChild(this.#element);
    }
    fall(){
        this.#fallInterval = setInterval(() => {
            this.#y += this.#speed;
            this.#element.style.top = this.#y + "px";

            if(this.#y > this.#container.offsetHeight){
                this.removeSnow();
            }
        }, 20);

    }
    removeSnow(){
        clearInterval(this.#fallInterval);
        this.#element.remove();

    }
}