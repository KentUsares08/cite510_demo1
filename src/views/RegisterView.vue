<template>
    <v-card
     class="ma-15"
    max-width="600"
    color="#cfcfcf"
    >
    <h1>
        Create An Account
    </h1>
    <v-card  class="ma-5"
    max-width="500"
    color="#ebebeb">
    <p>
        <input type="text" placeholder="Email" v-model="email" />
    </p>
    <p>
        <input type="password" placeholder="Password" v-model="password" />
    </p>
    </v-card>
    <v-row>
    <v-col>
    <v-card  class="ma-5 px-5"
    max-width="180"
    color="#fafafa">
    <p>
        <button @click="register">Submit Register </button>
    </p>
    </v-card>
    </v-col>
    <v-col>
    <v-card  class="ma-5 px-5"
    max-width="180"
    color="#fafafa">
    <p>
        
    </p>
    </v-card>
    </v-col>
    </v-row>
    </v-card>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'
const email = ref("");
const password = ref("");
const router = useRouter()

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data)=>{
        console.log("Successfully Registered!");
        console.log(auth.currentUser)
        router.push('/')
    })
    .catch((error)=>{
        console.log(error.code);
        alert(error.message);
    });
};
const signInWithGoogle = () => {
 
};
</script>