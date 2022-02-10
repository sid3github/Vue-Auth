import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFuVXxeDNsFG1zHjUlzPMO_MgT8fXIfD8",
  authDomain: "vue-auth-1a742.firebaseapp.com",
  projectId: "vue-auth-1a742",
  storageBucket: "vue-auth-1a742.appspot.com",
  messagingSenderId: "659820764738",
  appId: "1:659820764738:web:fd931d12f8af4649aad7db",
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
