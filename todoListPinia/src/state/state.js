import { defineStore } from "pinia";
import { ref } from "vue";
import Todo from "../classes/Todo.js";

export const todoState = defineStore("todoState", () => {
       const todos = ref([]);
       function addTodo(name, toDate, desc) {
            const todo = new Todo(name, toDate, desc);
            todos.value.push(todo);
       }
       function getTodos() {
              return todos.value;
       }
       function toggleStatus(index) {
        const todo = todos.value[index];
        todo.toggleStatus();
      }
       return {
              addTodo,
              getTodos,
              toggleStatus
       };
});