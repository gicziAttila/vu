import ClickCounter from "../../components/ClickCounter.vue";
import { test, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("ClickCounter", () => {
    test("The click function is working", async()=>{
        const wrapper = mount(ClickCounter);
        const button = wrapper.find("button")

        await button.trigger("click");
        await button.trigger("click");

        expect(wrapper.find("span").text()).toContain("2")
    })
    test("The img alt is correct", ()=>{
        const wrapper = mount(ClickCounter)
        expect(wrapper.find("img").attributes("alt")).toBe("Logo")
    })
    test("The img title is correct", ()=>{
        const wrapper = mount(ClickCounter)
        expect(wrapper.find("img").attributes("title")).toBe("vueLogo")
    })
    test("The img src is correct", ()=>{
        const wrapper = mount(ClickCounter)
        expect(wrapper.find("img").attributes("src")).toBe("/src/assets/vue.svg")
    })
})