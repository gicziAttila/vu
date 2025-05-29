
import { defineStore } from "pinia";
import { ref } from "vue";

export const szerepjatekKarakterek = defineStore("karakterek", () => {
   const sajatKArakterek = ref([])

   const addSajatKarakter = (karakter) =>{
    sajatKArakterek.value.push(karakter)
   }
   const getSajatKarakter = () => {
    return sajatKArakterek.value
   }
   return{getSajatKarakter, addSajatKarakter}
});

