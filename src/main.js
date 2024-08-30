import { createApp } from 'vue'
import './style.css'
import './assets/tailwind.css';
import App from './App.vue'
import router from './router';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
// Import FontAwesome core
import { library } from '@fortawesome/fontawesome-svg-core';
// Import FontAwesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// Import specific icons (you can add more as needed)
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
// Add icons to the library
library.add(faUserSecret);


const app=createApp(App);

// Register FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.mount('#app')
