<script setup>
    import { defineProps, watch, defineEmits } from 'vue';
    import Fruit from "../classes/Fruit.js"
    const props = defineProps({
        start: Boolean

    })

    const emit = defineEmits(['updateScore'])

    var fruitInterval = null;

    watch(() => props.start, (newValue, oldValue) =>{
        if(newValue && !fruitInterval){
            var gameArea = document.querySelector(".gameArea");
            fruitInterval = setInterval(() => {
                const x = Math.random()*(gameArea.offsetWidth - 30);
                const fruit = new Fruit(x, 0, 1 + Math.random()*2, ".gameArea", collectFruit)
                fruit.fall();

            }, 800);
        }
        if(!newValue){
            stop()
        }
    })
    
    const stop = () => {
        clearInterval(fruitInterval);
        fruitInterval = null;
        document.querySelectorAll(".apple").forEach(apple => apple.remove());
        document.querySelectorAll(".banana").forEach(banana => banana.remove());
    }

    const collectFruit = (pont) => {
        emit("updateScore", pont);
    }

</script>
<template>
    <section class="gameArea">

    </section>
</template>
<style scoped>
.gameArea {
    background-color: #add8e6;
    border: 2px solid #d6322f;
    width: 400px;
    height: 500px;
    margin: 30px auto;
    position: relative;
    overflow: hidden;
}
</style>