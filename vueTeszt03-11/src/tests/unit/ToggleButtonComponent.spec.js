import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import ToggleButton from "../../components/ToggleButton.vue";

describe("toggleButton", ()=>{
    test("The toggleButton text is off when props is false",()=>{
        const wrapper = mount(ToggleButton, {
            props: {
                checked: false
            }
        })
        const button = wrapper.find("button")
        expect(button.text()).toBe("OFF")
    })
    test("The toggleButton text is on when props is true",()=>{
        const wrapper = mount(ToggleButton, {
            props: {
                checked: true
            }
        })
        const button = wrapper.find("button")
        expect(button.text()).toBe("ON")
    })
    test("The toggleButton toggles the checked state", async()=>{
        const wrapper = mount(ToggleButton, {
            props: {
                checked: false
            }
        })
        const button = wrapper.find("button")
        await button.trigger("click")

        expect(wrapper.emitted("update")).toBeTruthy()
        expect(button.text()).toBe("ON")
        await button.trigger("click")
        expect(button.text()).toBe("OFF")
    })
})