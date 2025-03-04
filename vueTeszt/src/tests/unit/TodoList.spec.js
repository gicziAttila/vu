import TodoList from "../../components/TodoList.vue";
import { test, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { todos } from "../../datas/todo";

describe("TodoList", ()=> {
    test("The todolist renders all elements", ()=>{
        const wrapper = mount(TodoList)
        const items = wrapper.findAll(".todos li")
        for (let i = 0; i < items.length; i++) {
            expect(items[i].text()).toBe(todos[i].text)
        }
    })
})