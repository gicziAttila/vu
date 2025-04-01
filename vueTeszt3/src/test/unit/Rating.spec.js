import { mount } from "@vue/test-utils";
import { expect, describe, test } from "vitest";
import Rating from "../../components/Rating.vue";

describe('Rating', () => {
    test('InitialRating props gives back the stars', ()=>{
        const wrapper = mount(Rating, {
            props: {
                initialRating: 3
        
            }
        })
        const stars = wrapper.findAll("span");
        expect(stars[0].classes()).toContain('active');
        expect(stars[1].classes()).toContain('active');
        expect(stars[2].classes()).toContain('active');

    })
    test('Click on star updates the value', () => {
        const wrapper = mount(Rating);
        const stars = wrapper.findAll("span");
        const thirdStar = stars[2]
        thirdStar.trigger("click");
        expect(wrapper.vm.rating).toBe(3);
    })
    test('Show rating text disappears', () => {
        const wrapper = mount(Rating, {
            props: {
                showRatingText: false
            }
        });
        const message = wrapper.find("div.rating-text");
        expect(message.exists()).toBeFalsy()
    })
    test('Stars is equals the maxrating', () => {
        const wrapper = mount(Rating, {
            props: {
                maxRating: 7
            }
        });
        const stars = wrapper.findAll("span");
        expect(stars.length).toBe(7)
    })
})