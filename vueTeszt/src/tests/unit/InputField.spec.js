import InputField from "../../components/InputField.vue";
import { test, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("InputField", ()=>{
    test("The showMessage function works", async()=>{
        const wrapper = mount(InputField)
        const inputFieldMessage = wrapper.find("input");
        const button = wrapper.find("button");

        await inputFieldMessage.setValue("Hello Vue!")
        await button.trigger("click")
        expect("Hello Vue!").toBe(wrapper.find("p").text())
    })
})