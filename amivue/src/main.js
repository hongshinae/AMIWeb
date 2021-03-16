import Vue from "vue";
import App from "@/App";
import config from "@/config";
import router from "@/routes";
import store from "@/store";
import VueMoment from "vue-moment";
import Promise from "es6-promise";
import { BootstrapVue, IconsPlugin, NavbarPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import GlobalDirectives from "@/globalDirectives";
import MainLayout from "@/mainLayout";
import i18n from "./locales";
import IconBase from "@/components/IconBase.vue";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(NavbarPlugin);
Vue.use(GlobalDirectives);
Vue.use(MainLayout);
Vue.use(VueMoment);
Vue.component("icon-base", IconBase);

new Vue({
	router,
	store,
	config,
	Promise,
	i18n,
	render: h => h(App)
}).$mount("#app");
