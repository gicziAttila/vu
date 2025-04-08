import {test, expect, describe} from "vitest"
import { mount } from "@vue/test-utils"
import gyumolcsList from "../../components/gyumolcsList.vue"

describe("Gyumolcslist", ()=>{
    test("Alapértelmezetten nincs kiválasztva semmi", ()=>{
        const wrapper = mount(gyumolcsList)
        expect(wrapper.vm.selected).toBe('')
    })
})