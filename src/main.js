import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import firebase from 'firebase/compat/app'


const firebaseConfig = {
  apiKey: "AIzaSyAvlkQnmzivutN2zXNLkBb9c6MqOxMoKiM",
  authDomain: "vueproject-5910f.firebaseapp.com",
  databaseURL: "https://vueproject-5910f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vueproject-5910f",
  storageBucket: "vueproject-5910f.appspot.com",
  messagingSenderId: "979665565161",
  appId: "1:979665565161:web:29c865eb046caef3ba0778"
};

firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
