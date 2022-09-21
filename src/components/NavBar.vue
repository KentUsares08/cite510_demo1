<template>
  <nav>
      <v-toolbar app theme="dark">
       <v-app-bar-nav-icon @click='toggleDrawer' ></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Midterm </span>
        <span>Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="error"
          v-bind="props"
        >
          Item List
        </v-btn>

      </template>
   
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon" >
          <v-list-item-title >{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
    <v-img
  src="https://cdn.discordapp.com/attachments/754747805200941196/1014446204244983849/zoom_in.png"
  contain
  max-height="75"
  max-width=" 75"
  style="padding-right:20px"
  >
 
  </v-img>
      
      
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" theme="dark" >
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon" >
          <v-list-item-title >{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import {getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from '../router';
    
  const drawer = ref(false)
  const isLoggedIn = ref(false);
  
  const  items =  ref([
           { title: 'Home', icon: 'mdi-view-dashboard', path: '/'},
           { title: 'Activities', icon: 'mdi-view-dashboard', path: '/basicMath'},
           { title: 'About the Project', icon: 'mdi-view-dashboard', path: '/aboutMe'},
           { title: 'Research', icon: 'mdi-help-box', path: '/rschVue'},
           { title: 'Calculator', icon: 'mdi-plus-one', path: '/calcuView'},
           { title: 'Question', icon: 'mdi-plus-one', path: '/questionView'},
           { title: 'Sign In', icon: 'mdi-help-box', path: '/signinView'},
           { title: 'Register', icon: 'mdi-view-dashboard', path: '/registerView'},
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 let auth;
 onMounted(()=>{
    auth = getAuth();
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        isLoggedIn.value = true;
      } else {
        isLoggedIn.value = false;
      }
    });
 });

 const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
 };
 
</script>