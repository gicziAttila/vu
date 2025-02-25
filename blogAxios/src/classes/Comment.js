export default class Comment{
    #email
    #comment
    constructor(email, comment){
        this.setEmail(email);
        this.setComment(comment);

        this.getEmail = this.getEmail.bind(this);
        this.getComment = this.getComment.bind(this);
    }
    setEmail(email){
        this.#email=email;
    }
    setComment(comment){
        this.#comment=comment;
    }
    getEmail(){
        return this.#email;
    }
    getComment(){
        return this.#comment;
    }
}