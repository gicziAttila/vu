import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import ItemListComponent from "../../components/ItemListComponent.vue";

describe("ItemListComponent", ()=>{
    const items = [
        {id: 1, name: "Apple"},
        {id: 2, name: "Banana"},
        {id: 3, name: "Orange"}
    ]
    const wrapper = mount(ItemListComponent, {
        props: {
            items
        }
    })
    const itemList = wrapper.findAll("li")
    test("The ItemList component list length is same as the items length", ()=>{
        expect(items.length).toBe(itemList.length)
        
    })
    test("The ItemList component items value is same", ()=>{
        for (let index = 0; index < itemList.length; index++) {
            expect(itemList[index].text()).toBe(items[index].name)
        }
        
    })
    test("The ItemList component click returns the correct item and emit", async()=>{
        const firstItem = wrapper.find("li")
        await firstItem.trigger("click")
        expect(wrapper.emitted("item-selected")).toBeTruthy()
        expect(wrapper.emitted("item-selected")[0]).toEqual([items[0]])
    })
})