<script setup>
import { ref } from 'vue';
import axios from 'axios';

const crudApi = "https://reeldev.hu/api/67bd91b18fb14639186019/randomuser"
const adatok = ref([]);

const name = ref("");
const email = ref("");
const phone = ref("");
const editingUser = ref();

const uploadRandomUser = async (randomUserName, randomUserEmail, randomUserCountry, randomUserPhone, randomUserCity, randomUserPostcode, randomUserStreet, randomUserState, randomUserPic, randomUserUsername, randomUserPassword, randomUserSalt, randomUsersha1) => {
  await axios.post(crudApi, {
    name: randomUserName,
    email: randomUserEmail,
    country: randomUserCountry,
    phone: randomUserPhone,
    city: randomUserCity,
    postcode: randomUserPostcode,
    street: randomUserStreet,
    state: randomUserState,
    pic: randomUserPic,
    username: randomUserUsername,
    password: randomUserPassword,
    salt: randomUserSalt,
    sha1: randomUsersha1
  })
    .then(response => {
      console.log("Sikeres feltöltés")
    })
    .catch(error => {
      console.error("Error: " + error)
    })
}

const getRandomUsers = async (n) => {
  for (let i = 0; i < n; i++) {
    await axios.get("https://randomuser.me/api/")
      .then(response => {
        var randomUserName = response.data.results[0].name.title + ". " + response.data.results[0].name.first + " " + response.data.results[0].name.last
        var randomUserEmail = response.data.results[0].email
        var randomUserCountry = response.data.results[0].location.country
        var randomUserPhone = response.data.results[0].phone
        var randomUserCity = response.data.results[0].location.city
        var randomUserPostcode = response.data.results[0].location.postcode
        var randomUserStreet = response.data.results[0].location.street.name + " " + response.data.results[0].location.street.number
        var randomUserState = response.data.results[0].location.state
        var randomUserPic = response.data.results[0].picture.medium
        var randomUserUsername = response.data.results[0].login.username
        var randomUserPassword = response.data.results[0].location.password
        var randomUserSalt = response.data.results[0].location.salt
        var randomUsersha1 = response.data.results[0].location.sha1

        uploadRandomUser(randomUserName, randomUserEmail, randomUserCountry, randomUserPhone, randomUserCity, randomUserPostcode, randomUserStreet, randomUserState, randomUserPic, randomUserUsername, randomUserPassword, randomUserSalt, randomUsersha1)
      })
      .catch(error => {
        console.error("Error: " + error)
      })
  }
}
// getRandomUsers(80)

const getUsers = async () => {
  await axios.get(crudApi)
    .then(response => {
      adatok.value = response.data;
    })
    .catch(error => {
      console.error("Error: " + error)
    })
}
const deleteUser = async (id) => {
  if (confirm("Are you sure")) {
    await axios.delete(crudApi + "/" + id)
      .then(response => {
        alert("Sikeres törlés")
        getUsers();
      })
      .catch(error => {
        console.error("Error: " + error)
      })
  }
}
const editUser = async (user) => {
  name.value = user.name
  email.value = user.email
  phone.value = user.phone
  editingUser.value = user;
}
const saveUser = async () => {
  editingUser.value.name = name.value;
  editingUser.value.email = email.value;
  editingUser.value.phone = phone.value;
  await axios.put(crudApi + "/" + editingUser.value.id, {
    name: editingUser.value.name,
    email: editingUser.value.email,
    country: editingUser.value.country,
    phone: editingUser.value.phone,
    city: editingUser.value.city,
    postcode: editingUser.value.postcode,
    street: editingUser.value.street,
    state: editingUser.value.state,
    pic: editingUser.value.pic,
    username: editingUser.value.username,
    password: editingUser.value.password,
    salt: editingUser.value.salt,
    sha1: editingUser.value.sha1
  })
    .then(response => {
      alert("Sikeres frissités")
      getUsers();
    })
    .catch(error => {
      console.error("Error: " + error)
    })
}
getUsers();
</script>

<template>
  <header>
    <h1 class="text-center">Table</h1>
  </header>
  <main>
    <section class="container">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in adatok">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.country }} {{ user.postcode }} {{ user.city }}, {{ user.street }}</td>
            <td>
              <span class="p-3" data-bs-toggle="modal" data-bs-target="#exampleModal"
                @click="editUser(user)">Edit</span>
              <span class="p-3" @click="deleteUser(user.id)">Delete</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
  <footer>
    <p class="text-center">Copyright@blabla</p>
  </footer>
  <!-- Modal -->
  <div class="modal fade text-dark" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit User</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Name:</label>
            <input type="text" class="form-control" v-model="name">
            <label class="form-label">Email:</label>
            <input type="email" class="form-control" v-model="email">
            <label class="form-label">Phone:</label>
            <input type="tel" class="form-control" v-model="phone">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="saveUser()">Save
            changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
span {
  cursor: pointer;
}
</style>
