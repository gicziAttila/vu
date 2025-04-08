import { test, expect, describe } from "vitest";
import { mount} from "@vue/test-utils";
import quote from "../../components/quote.vue";
describe("Quote", ()=>{
    const wrapper = mount(quote)
    const quotes = [
        "Az élet szép.",
        "Tanulni jó.",
        "A Vue fantasztikus!"
      ]
    test("Betöltéskor megjelenik az idézet", ()=>{
        const message = wrapper.find('p')
        expect(message.text()).toBe("Az élet szép.")
    })
    test("Gomb új idézetet generál", async()=>{
        const quoteIndex = Math.floor(Math.random() * quotes.length)
        const button = wrapper.find('button')
        const messageBefore = wrapper.find('p').text()
        await button.trigger('click')
        const messageAfter = wrapper.find('p').text()
        expect(quoteIndex).toBeGreaterThanOrEqual(0)
        expect(quoteIndex).toBeLessThanOrEqual(2)
        expect(messageBefore).not.toBe(messageAfter)
    })
    test("Az idézet mező sosem üres", ()=>{
        const message = wrapper.find('p')
        expect(message.text().length).toBeGreaterThan(0)
    })
})