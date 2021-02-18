import Vue from "vue";

// 모든 Vue의 로그와 경고를 출력하지 않습니다.
Vue.config.silent = false;
// Vue를 불러온 후 동기적으로 설정됩니다
Vue.config.devtools = true;
Vue.config.errorHandler = function(err, vm, info) {
	// 에러 핸들링
	// 'type'은 Vue의 에러 타입입니다. 예: 라이프사이클 훅
	// 2.2.0+ 이상에서 사용할 수 있습니다
	console.log(err);
	console.log(vm);
	console.log(info);
};
Vue.config.warnHandler = function(msg, vm, trace) {
	// trace는 컴포넌트 계층 구조를 추적합니다.
	console.log(msg);
	console.log(vm);
	console.log(trace);
};
//false로 설정하면 배포에 대한 팁을 출력하지 않습니다.
Vue.config.productionTip = false;

export default Vue;
