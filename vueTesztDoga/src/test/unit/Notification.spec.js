import { mount } from "@vue/test-utils";
import { test, describe, expect } from "vitest";
import Notification from "../../components/Notification.vue";

describe("Notification", ()=>{
    test("The message props displays", ()=>{
        const wrapper = mount(Notification, {
            props: {
                message: "asd!"
            }
        });
        expect(wrapper.find("p").text()).toBe("Az üzenet: asd!")
    })
    test("The background changes as the type prop",()=>{
        const wrapper = mount(Notification, {
            props: {
                type: "error"
            }
        });
        expect(wrapper.find("p").attributes("background")).toBe("red")
    } )
})