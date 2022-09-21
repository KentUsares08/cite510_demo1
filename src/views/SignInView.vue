<template>
    <v-card
     class="ma-15"
    max-width="700"
    color="#cfcfcf"
    >
    <h1>
       Sign In your Account
    </h1>
    <v-card  class="ma-15"
    max-width="544"
    color="#ebebeb">
    <p>
        <input type="text" placeholder="Email" v-model="email" />
    </p>
    <br />
    <p>
        <input type="password" placeholder="Password" v-model="password" />
    </p>
    </v-card>

    <v-card  class="ma-15"
    max-width="544"
    color="#ebebeb">
    
    <p v-if="errMsg">{{ errMsg }}</p>
        <button @click="login"> Log In </button>
    <p>
    
    </p>
    <p>
        
    </p>
    </v-card>
    </v-card>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'
const email = ref("");
const password = ref("");
const errMsg = ref()
const router = useRouter();

const login = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data)=>{
        console.log("Successfully Signed In");
    })
    .catch((error)=>{
        console.log(error.code);
        switch (error.code) {
            case "auth/invaled-email":
            errMsg.value = "Your Email was Invalid";
            break;
            case "auth/user-not-found":
            errMsg.value = "Your entered Email account can't be found";
            break;
            case "auth/wrong-password":
            errMsg.value = "Your entered Password was Incorrect";
            break;
            default:
            errMsg.value = "Might be the Password or Email was incorrect"
            break;
        }

    });
};
const signInWithGoogle = () => {
 
};
</script>