import {defineStore} from 'pinia';
import {ref} from "vue";
    
export const questionState = defineStore("questionState",()=>{
    const questions = ref([])
    const userAnswers = ref([])
    const questionIndexes = ref([])

    function addQuestion(question){
        questions.value.push(question);
    }
    function getQuestion(){
        return questions.value;
    }
    function getQuestionsLength(){
        return questions.value.length;
    }
    function addUserAnswer(answers){
        userAnswers.value.push(answers);
    }
    function getAnswers(){
        return userAnswers.value;
    }
    function setQuestionIndexes(indexes){
        return questionIndexes.value = indexes;
    }
    function getQuestionIndexes(){
        return questionIndexes.value;
    }
    function clearState(){
        questions.value = [];
        userAnswers.value = [];
        questionIndexes.value = [];
    }
    return {addQuestion, addUserAnswer, getAnswers, getQuestion, getQuestionsLength, setQuestionIndexes, getQuestionIndexes, clearState}
});
