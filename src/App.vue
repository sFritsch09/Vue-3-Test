<template>
	<div class="nav-wrapper">
		<div id="nav">
			<router-link to="/">Home</router-link> | <router-link to="/pokemon">Pokemon</router-link> |
			<router-link to="/composition">Composition App</router-link> |
			<router-link to="/microblog">Microblog</router-link> |
			<router-link to="/photoapp">PhotoApp</router-link>
			<div class="nav-switch">
				<dark-mode-switch size="3em" />
			</div>
		</div>
	</div>

	<router-view />
</template>
<script>
import DarkModeSwitch from './components/DarkModeSwitch.vue';
export default {
	components: { DarkModeSwitch },
	mounted() {
		this.$store.dispatch('darkMode/getTheme');
	},
};
</script>
<style lang="scss">
html,
body {
	padding: 0;
	margin: 0;
	background-color: var(--background-color-primary);
}
/* Define styles for the default root window element */
:root {
	--background-color-primary: #ebebeb;
	--background-color-secondary: #fafafa;
	--accent-color: #cacaca;
	--text-primary-color: #222;
	--element-size: 2rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
	--background-color-primary: #1e1e1e;
	--background-color-secondary: #2d2d30;
	--accent-color: #3f3f3f;
	--text-primary-color: #ddd;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: var(--text-primary-color);
	background-color: var(--background-color-primary);
}

#nav {
	display: flex;
	justify-content: space-around;
	padding: 30px;
	background: var(--background-color-primary);
	color: var(--text-primary-color);
	a {
		font-weight: bold;
		color: var(--text-primary-color);

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
.nav-wrapper {
	padding: 20px 180px;
}
.nav-switch {
	display: flex;
}
</style>
