import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import GyumolcsList from "../../components/gyumolcsList.vue";

describe("GyumolcsList", () => {
    const wrapper = mount(GyumolcsList)
    test("Alapértelmezetten nincs kiválasztva semmi", () => {
        expect(wrapper.vm.selected).toBe("")
    })
    test("Választás után a kiválasztott megjelenik", async () => {
        const options = wrapper.find('select').findAll('option')
        await options.at(1).setSelected()
        const message = wrapper.find('p');
        expect(message.text()).toBe("Kiválasztott: Alma");
    })
})