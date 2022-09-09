<template>
  <nav>
      <v-toolbar app theme="dark">
       <v-app-bar-nav-icon @click='toggleDrawer' ></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Laboratory 5 </span>
        <span>Vuetify Demo</span>
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
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Home', icon: 'mdi-view-dashboard', path: '/'},
           { title: 'Basic Math', icon: 'mdi-view-dashboard', path: '/basicMath'},
           { title: 'About Me', icon: 'mdi-view-dashboard', path: '/aboutMe'},
           { title: 'String App', icon: 'mdi-help-box', path: '/stringApp'},
           { title: 'Research', icon: 'mdi-help-box', path: '/rschVue'},
           { title: 'Calculator', icon: 'mdi-plus-one', path: '/calcuView'},
           { title: 'AxousDemo', icon: 'mdi-plus-one', path: '/axiosView'},
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>