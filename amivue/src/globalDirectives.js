import { directive as vClickOutside } from "vue-clickaway";
import { VueMaskDirective } from "v-mask";

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalDirectives = {
	install(Vue) {
		Vue.directive("click-outside", vClickOutside);
		Vue.directive("mask", VueMaskDirective);
	}
};

export default GlobalDirectives;
