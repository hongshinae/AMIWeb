import Vue from "vue";
import App from "@/App.vue";
import config from "@/config";
import router from "@/routes";
import store from "@/store";
import { BootstrapVue, IconsPlugin, NavbarPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(NavbarPlugin);

new Vue({
	router,
	store,
	config,
	render: h => h(App)
}).$mount("#app");
