<script setup>
    import {ref, watch} from "vue"
    import Guest from "../classes/Guest";

    var name = ref("");
    var email = ref("");
    var anypet = ref("");
    var pet = ref("");
    var errorMessage = ref("");
    var guests = [];
    var errorField = ref(0);
    var max = ref(3);

    const registration = () => {
        errorMessage.value = "";
        errorField.value = 0;

        if(name.value.length == 0){
            errorMessage.value = "Name is required!";
            errorField.value = 1;
            
        }else if(email.value.length == 0){
            errorMessage.value = "Email is required!";
            errorField.value = 2;
        }else if(anypet.value.length == 0){
            errorMessage.value = "Please choose if you want any pet!";
            errorField.value = 3;
        }
        else if(anypet.value == 1 && pet.value.length == 0){
            errorMessage.value = "Pet is required!";
            errorField.value = 4;
        }else{
            var g = new Guest(name.value, email.value, pet.value);
            guests.push(g);
            max.value--;
            name.value = email.value = anypet.value = pet.value = "";
        }
    }

    const reset = () =>{
        max.value = 3;
        guests = [];
    }

    watch(anypet, () =>{
        if(anypet.value != "1"){
            pet.value = "";
        }
    })

</script>
<template>
    <div v-if="max>0">
        <p>Free seats: {{ max }}</p>
        <p>Hurry up!</p>
        <form>
            <p class="error" v-if="errorMessage.length != 0"> {{ errorMessage }}</p>
            <label for="name">Name:</label>
            <input id="name" type="text" v-model="name" :class="{'redBorder': errorField == 1}">
            <label for="email">Email:</label>
            <input id="email" type="text" v-model="email" :class="{'redBorder': errorField == 2}">
            <label for="petSelect">Do your bring any pet?</label>
            <select id="petSelect" v-model="anypet" :class="{'redBorder': errorField == 3}">
                <option selected value="">Choose one!</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <div v-if="anypet==1">
                <label for="pet">Pet:</label>
                <input id="pet" type="text" v-model="pet" :class="{'redBorder': errorField == 4}">
            </div>
        </form>
        <button @click.prevent="registration()">Registration</button>
    </div>
    <div v-if="max==0">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Pet</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="guest in guests">
                    <td>{{ guest.getName() }}</td>
                    <td>{{ guest.getEmail() }}</td>
                    <td>{{ guest.getPet() }}</td>
                </tr>
            </tbody>
        </table>
        <button @click.prevent="reset()">Reset</button>
    </div>
</template>
<style scoped>
    p{
        color: black;
        font-weight: bold;
        margin: 1px;
        text-align: center;
    }
    form{
        margin-top: 5px;
        padding: 10px;
    }
    div, form {
        display: flex;
        flex-direction: column;
    }
    label{
        color: #34495F;
        margin: 5px;
        font-weight: 700;
    }
    button{
        padding: 10px;
        border: none;
        background-color: #3AB982;
        text-transform: uppercase;
        margin: 20px auto 0px auto;
        display: block;
        cursor: pointer;
    }
    input, select {
        width: calc(100%-10%);
        padding: 5px;
    }
    button:hover, thead{
        background-color: #34495F;
    }
    .error{
        background-color: red;
        padding: 5px 20px;
    }
    button, .error, thead{
        color: white;
    }
    .redBorder{
        border: 2px solid red;
    }
    table{
        width: 100%;
        border-collapse: collapse;
    }
    td,th{
        padding: 7px;
        border: 1px solid black;
    }
</style>