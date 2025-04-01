import { mount } from "@vue/test-utils";
import { test, describe, expect } from "vitest";
import SearchBar from "../../components/SearchBar.vue";

describe("SearchBar", ()=>{
    test("The input works", ()=>{
        const wrapper = mount(SearchBar)
        const input = wrapper.find("input")
        input.setValue("asd")
        expect(input.element.value).toBe("asd")
    })
    test("The button works", async()=>{
        const wrapper = mount(SearchBar)
        const input = wrapper.find("input")
        const button = wrapper.find("button")
        input.setValue("asd")
        await button.trigger("click")
        expect(input.element.value).toBe("")
    })
})