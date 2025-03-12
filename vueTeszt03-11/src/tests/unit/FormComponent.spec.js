import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import FormComponent from "../../components/FormComponent.vue";

describe("FormComponent", ()=>{
    const wrapper = mount(FormComponent)
    const input = wrapper.find("input")
    test("FormComponent reset button send emit and clear input ", async()=>{
        const button = wrapper.find("button[type='reset'")
        await input.setValue("test")
        await button.trigger("click")
        expect(input.element.value).toBe("")
        expect(wrapper.emitted("reset")).toBeTruthy()
    })
    test("FormComponent submit button send emit and send input data", async()=>{
        const button = wrapper.find("button[type='submit']")
        await input.setValue("test")
        await button.trigger("click")
        expect(wrapper.emitted("submit")).toBeTruthy()
        expect(wrapper.emitted("submit")[0]).toEqual(["test"])
    })
})