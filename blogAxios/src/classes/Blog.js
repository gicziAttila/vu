export default class Blog{
    #id
    #title
    #body
    constructor(id, title, body){
        this.setId(id);
        this.setTitle(title);
        this.setBody(body);

        this.getId = this.getId.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getBody = this.getBody.bind(this);
    }
    setId(id){
        this.#id=id;
    }
    setTitle(title){
        this.#title=title;
    }
    setBody(body){
        this.#body=body;
    }
    getId(){
        return this.#id;
    }
    getTitle(){
        return this.#title;
    }
    getBody(){
        return this.#body;
    }
}