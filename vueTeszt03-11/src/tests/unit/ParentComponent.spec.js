import { mount } from "@vue/test-utils";
import { test, expect, describe } from "vitest";
import ParentComponent from "../../components/ParentComponent.vue";
import ChildComponent from "../../components/ChildComponent.vue";

describe("ParentComponent", () => {
  const name = "John";

  test("Set name to props correct from input field", async () => {
    const wrapper = mount(ParentComponent);
    const input = wrapper.find("input");
    await input.setValue(name);
    const child = wrapper.findComponent(ChildComponent);
    expect(child.props("name")).toBe(name);
  });

  test("Emit message from ChildComponent", async () => {
    const wrapper = mount(ParentComponent);
    const input = wrapper.find("input");
    await input.setValue(name);
    const child = wrapper.findComponent(ChildComponent);
    const button = child.find("button");
    await button.trigger("click");
    expect(child.emitted("greet")).toBeTruthy();
    expect(wrapper.find("p").text()).toContain("Hello " + name + "!");
  });
});