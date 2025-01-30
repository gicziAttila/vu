export default class Question {
    #question
    #answer

    constructor(question, answer) {
        this.setQuestion(question)
        this.setAnswer(answer)

        this.getQuestion = this.getQuestion.bind(this)
        this.getAnswer = this.getAnswer.bind(this)
    }

    getQuestion(){return this.#question}
    getAnswer(){return this.#answer}
    setQuestion(question){this.#question = question}
    setAnswer(answer){this.#answer = answer}
}