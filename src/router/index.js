import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/pokemon',
		name: 'Pokemon',
		component: () => import('../views/Pokemon.vue'),
	},
	{
		path: '/composition',
		name: 'Composition',
		component: () => import('../views/Composition.vue'),
	},
	{
		path: '/microblog',
		name: 'Microblog',
		component: () => import('../views/Microblog.vue'),
	},
	{
		path: '/photoapp',
		name: 'PhotoApp',
		component: () => import('../views/PhotoApp.vue'),
		children: [
			{
				path: '/photoapp/albums/:id',
				name: 'Photos',
				component: () => import('../views/PhotoView.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
