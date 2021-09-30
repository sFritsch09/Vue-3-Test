import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './components/photos/store';
import './style.css';

createApp(App)
	.use(store)
	.use(router)
	.mount('#app');
