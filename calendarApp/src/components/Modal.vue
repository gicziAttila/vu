<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import { state } from '../state/state';
import Event from '../classes/Event';
const props = defineProps({
    show: Boolean
});

const day = ref(0);
const name = ref('');
const from = ref('');
const to = ref('');

const emits = defineEmits(['cancel', 'add']);

const add = () => {
    cancel();
    var e = new Event(name.value, from.value, to.value);
    state.events[day.value].push(e);
};
const cancel = () =>{
    emits('cancel');
};
    
</script>
<template>
    <div class="modal" v-if="show">
        <h2>Add event</h2>
        <p>
            <label for="event-day">Day:</label>
            <select id="event-day" v-model="day">
                <option :value="0">Monday</option>
                <option :value="1">Tuesday</option>
                <option :value="2">Wednesday</option>
                <option :value="3">Thursday</option>
                <option :value="4">Friday</option>
                <option :value="5">Saturday</option>
                <option :value="6">Sunday</option>
            </select>
        </p>
        <p>
            <label for="event-name">Event name:</label>
            <input type="text" id="event-name" v-model="name">
        </p>
        <p>
            <label for="event-time">From:</label>
            <input type="time" id="event-time" v-model="from">
        </p>
        <p>
            <label for="event-time">To:</label>
            <input type="time" id="event-time" v-model="to">
        </p>
        <p class="buttons">
            <button @click="cancel">Cancel</button>
            <button @click="add">Add</button>
        </p>
    </div>
</template>
<style scoped>
    .modal{
        width: 300px;
        background-color: #ccc;
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    h2{
        margin: 0;
        padding: 0px 0px 10px 0px;
        border-bottom: 1px solid white;
    }
    h2, .buttons{
        text-align: center;
    }
    label, button{
        font-weight: 700;
    }
    label, input, select{
        display: block;
        width: 100%;
        margin: 10px 0;
        border: none;
    }
    input{
        padding: 7px 10px;
        width: calc(100% - 20px);
    }
    select{
        padding: 7px 10px;
    }
    .buttons{
        display: flex;
        justify-content: space-between;
    }
    .buttons button{
        padding: 10px 20px;
        margin: 10px 0;
        border: none;
        background-color: white;
        color: #000;
        border-radius: 10px;
        cursor: pointer;
    }
    .buttons button:hover{
        background-color: #000;
        color: white;
    }
</style>