import { defineStore } from "pinia";
import { ref } from "vue";
import Todo from "../classes/Todo.js";

export const todoState = defineStore("todoState", () => {
       const keepFresh = ref(false);
       const todos = ref([]);
       function addTodo(name, toDate, desc, status) {
            const todo = new Todo(name, toDate, desc, status);
            todos.value.push(todo);
       }
       function getTodos() {
              return todos.value;
       }
       function getFresh() {
              return keepFresh.value
       }
       function changeKeepFresh() {
              keepFresh.value = !keepFresh.value;
              console.log(keepFresh.value);
       }
       return {
              addTodo,
              getTodos,
              getFresh,
              changeKeepFresh
       };
});