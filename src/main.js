import { createApp } from 'vue';
import App from './App.vue';
import '@formkit/themes/genesis';
import './assets/Styling.css';
import Vue from 'vue';
import CapturePageVue from './components/CapturePage.vue';
import PersonalInfoVue from './components/PersonalInfoPage.vue';
import CrimePreventionVue from './components/CrimePreventionPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store.js';

const routes = [
	{ path: '/email', component: CapturePageVue },
	{ path: '/name', component: PersonalInfoVue },
	{ path: '/extra', component: CrimePreventionVue },
];
const router = createRouter({ history: createWebHistory(), routes });

createApp(App).use(router, store).mount('#app');
