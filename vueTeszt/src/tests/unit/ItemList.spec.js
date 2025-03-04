import ItemList from "../../components/ItemList.vue";
import { test, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("ItemList", ()=> {
    test("The ItemList has correct size", () => {
        const wrapper = mount(ItemList);
        const items = wrapper.findAll(".items li")
        expect((items.length)).toBe(3)
    })
    test("The ItemList renders all items", () => {
        const wrapper = mount(ItemList);
        const items = wrapper.findAll(".items li")
        const fruits = ["apple", "banana", "orange"]
        for (let i = 0; i < items.length; i++) {
            expect(items[i].text()).toBe(fruits[i])
        }
    })
})