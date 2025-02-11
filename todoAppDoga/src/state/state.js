import { defineStore } from "pinia";
import { ref } from "vue";

export const todoState = defineStore("todoState", () => {
    const todoList = ref([])
    const keepFresh = ref(false)

    function addTodo(todo){
        todoList.value.push(todo)
    }
    function getTodo(){
        return todoList.value;
    }
    function deleteTodo(index){
        todoList.value.splice(index, 1)
    }
    function changeFresh(){
        keepFresh.value = !keepFresh.value
    }
    function getFresh(){
        return keepFresh.value
    }
    function updateTodo(name, date, index){
        todoList.value[index].setName(name)
        todoList.value[index].setDate(date)
        todoList.value[index].setStatus(false)
    }
    return{addTodo, getTodo, getFresh, changeFresh, deleteTodo, updateTodo}
})