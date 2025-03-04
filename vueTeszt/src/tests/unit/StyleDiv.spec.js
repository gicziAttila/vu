import StyleDiv from "../../components/StyleDiv.vue";
import { test, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("StyleDiv", ()=> {
    test("The StyleDiv component has a div with a correct color (red)", () => {
        const wrapper = mount(StyleDiv);
        expect(wrapper.find(".styleDiv").attributes("style")).toContain("color: red")
    })
})