import Greeting from "../../components/Greeting.vue";
import { test, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("Greeting", () => {
    test("Greeting component contains 'Welcome to Vue!' text", () => {
        const wrapper = mount(Greeting);
        expect(wrapper.find("h1").text()).toContain("Welcome to Vue!");
    });
    test("Greeting component contains 'Vue is very good framework!' text", () => {
        const wrapper = mount(Greeting);
        expect(wrapper.find("p").text()).toContain("Vue is very good framework!");
    });
});