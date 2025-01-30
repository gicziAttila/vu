import { defineStore } from "pinia";
import { ref } from "vue";

export const questionState = defineStore("questionState",()=>{
    const questions = ref([]);
    const userAnswers = ref([]);
    const questionsIndexes = ref([]);

    function addQuestion(question){
        questions.value.push(question);
    }

    function getQuestions(){
        return questions.value;
    }

    function getQuestionsLength(){
        return questions.value.length;
    }

    function addUserAnswer(answers){
        userAnswers.value.push(answers);
    }

    function getUserAnswers(){
        return userAnswers.value;
    }

    function getQuestionsIndexes(){
        return questionsIndexes.value;
    }

    function setQuestionsIndexes(indexes){
        questionsIndexes.value = indexes;
    }

    function clearState(){
        questions.value = userAnswers.value = questionsIndexes.value = [];
    }

    return {addQuestion, getQuestions, addUserAnswer, getUserAnswers, getQuestionsLength, getQuestionsIndexes, setQuestionsIndexes, clearState}
});