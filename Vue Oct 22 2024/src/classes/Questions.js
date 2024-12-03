export default class Questions{
    #question;
    #answers;
    #goodAnswer;

    constructor(question, answers, goodAnswer){
        this.setQuestion(question);
        this.setAnswers(answers);
        this.setGoodAnswer(goodAnswer);

        this.getQuestion = this.getQuestion.bind(this) 
        this.getAnswers = this.getAnswers.bind(this) 
        this.getGoodAnswer = this.getGoodAnswer.bind(this) 
    }

    setQuestion(question){
        this.#question = question;
    }

    setAnswers(answers){
        this.#answers = answers;
    }

    setGoodAnswer(goodAnswer){
        this.#goodAnswer = goodAnswer;
    }

    getQuestion(){
        return this.#question;
    }

    getAnswers(){
        return this.#answers;
    }

    getGoodAnswer(){
        return this.#goodAnswer;
    }
}