import { createApp } from 'vue';
import App from './App.vue';
import '@formkit/themes/genesis';
import './assets/Styling.css';
import FormPage from './components/FormPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store.js';

//generating the routes
const routes = [{ path: '/:pathMatch(.*)*', component: FormPage }];
const router = createRouter({ history: createWebHistory(), routes });

createApp(App).use(router, store).mount('#app');
