export default class Event{
    #name;
    #timeFrom;
    #timeTo;
    #color;

    constructor(name, timeFrom, timeTo){
        this.setName(name);
        this.setTimeFrom(timeFrom);
        this.setTimeTo(timeTo);
        this.setColor();


        this.getName = this.getName.bind(this);
        this.getTimeFrom = this.getTimeFrom.bind(this);
        this.getTimeTo = this.getTimeTo.bind(this);
        this.getColor = this.getColor.bind(this);
    }


    setName(name){
        this.#name = name;
    }
    setTimeFrom(timeFrom){
        this.#timeFrom = timeFrom;
    }
    setTimeTo(timeTo){
        this.#timeTo = timeTo;
    }



    getName(){
        return this.#name;
    }
    getTimeFrom(){
        return this.#timeFrom;
    }
    getTimeTo(){
        return this.#timeTo;
    }
    getColor(){
        return this.#color;
    }

    setColor(){
        var letters = '0123456789ABCDEF';
        this.color = "#";
        for (var i = 0; i < 6; i++) {
            this.#color += letters[Math.floor(Math.random() * 16)];
        }
    }
}
