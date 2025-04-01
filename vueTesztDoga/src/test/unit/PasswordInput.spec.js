import { mount } from "@vue/test-utils";
import { test, describe, expect } from "vitest";
import PasswordInput from "../../components/PasswordInput.vue";

describe("PasswordInput", ()=>{
    test("The input type is password when the project runs in the beggining", ()=>{
        const wrapper = mount(PasswordInput)
        expect(wrapper.vm.passwordType).toBe("password")
    })
    test("When the checkbox is clicked the input type will be text", async()=>{
        const wrapper = mount(PasswordInput)
        const checkbox = wrapper.find("input[type='checkbox']")
        const checked = true;
        await checkbox.setChecked(checked);
        expect(wrapper.vm.passwordType).toBe("text")
    })
    test("The password input displays correctly the text", async()=>{
        const wrapper = mount(PasswordInput)
        const password = wrapper.find("input[type='password']")
        await password.setValue("asd")
        const checkbox = wrapper.find("input[type='checkbox']")
        const checked = true;
        await checkbox.setChecked(checked);
        expect(wrapper.vm.password).toBe("asd")
    })
})