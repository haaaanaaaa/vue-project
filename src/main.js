import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCz2HQK6sZDSIvsikdnprh-EBuLSKiN7-Y",
  authDomain: "vue-project-5b391.firebaseapp.com",
  projectId: "vue-project-5b391",
  storageBucket: "vue-project-5b391.appspot.com",
  messagingSenderId: "703364236162",
  appId: "1:703364236162:web:3968d91109c3b81795059b",
};

initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app");
