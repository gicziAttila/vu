import { test, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import tabs from "../../components/tabs.vue";

describe("Tabs", ()=>{
    const wrapper = mount(tabs)
    test("Alapértelmezett fül a főoldal", ()=>{
        expect(wrapper.vm.active).toBe("home")
        const divs = wrapper.findAll('div')
        const homeDiv = divs.at(1);
        expect(homeDiv.text()).toBe("Üdv a főoldalon!")
    })
    test("Fülváltásra a megfelelő tartalom jelenik meg" ,async()=>{
        const changeButton = wrapper.findAll('button')
        const aboutButton = changeButton.at(1)
        await aboutButton.trigger('click')
        expect(wrapper.vm.active).toBe('about')
        const divs = wrapper.findAll('div')
        const homeDiv = divs.at(1);
        expect(homeDiv.text()).toBe("Rólunk oldal tartalma")
    })
    test("A másik fül visszakattintható", async() => {
        const changeButton = wrapper.findAll('button')
        const homeButton = changeButton.at(0)
        const aboutButton = changeButton.at(1)
        await aboutButton.trigger('click')
        expect(wrapper.vm.active).toBe('about')
        await homeButton.trigger('click')
        expect(wrapper.vm.active).toBe('home')
    })
})