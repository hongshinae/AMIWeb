<template>
	<div class="content">
		<content-header :paths="paths" :pageName="pageName" />
		<b-row class="row-wrap">
			<b-col lg="12" xl="8">
				<div class="box">
					<h5>
						<span>{{ $t("server.used") }}</span>
						<b class="fontC">{{ system.osCpu }}</b>
					</h5>
					<div class="chartWarp">
						<div class="">
							<high-charts :options="chartOptions" />
						</div>
					</div>
				</div>
				<div class="box">
					<h5>
						<span>{{ $t("server.serverMap") }}</span>
					</h5>
					<div class="svg-Warp">
						<img src="@/assets/svg/server.svg" />
					</div>
				</div>
			</b-col>
			<b-col lg="12" xl="4">
				<div class="box">
					<h5>
						<span>{{ $t("server.serverInformation.title") }}</span>
						<b class="fontC">{{ system.statusTrue }}</b>
					</h5>
					<div class="dutyCycle cpu">
						<h4>
							<span class="title">{{ $t("server.serverInformation.osCpu") }}</span>
							<span class="deta">{{ system.osCpu }}%</span>
						</h4>
						<div class="progress">
							<div
								class="progress-bar"
								role="progressbar"
								:aria-valuenow="system.osCpu"
								aria-valuemin="0"
								aria-valuemax="100"
								:style="'width: ' + system.osCpu + '%;'"
							>
								<span class="sr-only">{{ system.osCpu }}% Complete</span>
							</div>
						</div>
					</div>
					<div class="dutyCycle">
						<h4>
							<span class="title">{{ $t("server.serverInformation.osMemory") }}</span>
							<span class="deta">{{ system.osMemory }}%</span>
						</h4>
						<div class="progress">
							<div
								class="progress-bar"
								role="progressbar"
								:aria-valuenow="system.osMemory"
								aria-valuemin="0"
								aria-valuemax="100"
								:style="'width: ' + system.osMemory + '%;'"
							>
								<span class="sr-only">{{ system.osMemory }}% Complete</span>
							</div>
						</div>
					</div>
					<ul class="serveInfo">
						<li>
							<h6>JVMUSED</h6>
							<span>{{ system.jvmUsed }}</span>
						</li>
						<li>
							<h6>JVMFREE</h6>
							<span>{{ system.jvmFree }}</span>
						</li>
						<li>
							<h6>JVMTOTAL</h6>
							<span>{{ system.jvmTotal }}</span>
						</li>
						<li>
							<h6>JVMMAX</h6>
							<span>{{ system.jvmMax }}</span>
						</li>
					</ul>
				</div>
				<div class="box">
					<h5>
						<span>{{ $t("server.deviceInformation") }}</span>
						<small>{{ $t("server.deviceInformationSub") }}</small>
					</h5>
					<div class="regist-info">
						<ul>
							<li>
								<div class="serve-box">
									<h6>{{ $t("server.equipmentCount") }}</h6>
									<b>{{ device.serverCount }}</b>
								</div>
							</li>
							<li>
								<div class="serve-box">
									<h6>{{ $t("server.meterCount") }}</h6>
									<b>{{ device.meterCount }}</b>
								</div>
							</li>
							<li>
								<div class="serve-box">
									<h6>{{ $t("server.dcuCount") }}</h6>
									<b>{{ device.dcuCount }}</b>
								</div>
							</li>
							<li>
								<div class="serve-box">
									<h6>{{ $t("server.modemCount") }}</h6>
									<b>{{ device.modemCount }}</b>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="box">
					<div class="serve-ex-ip-wrap" v-for="(item, key) in serverList" :key="key">
						<ul>
							<li><span :class="{ linkage: item.status == 0, unlinkage: item.status == 1 }"></span></li>
							<li :class="{ 'linkage-text': item.status == 0, 'unlinkage-text': item.status == 1 }">
								{{ item.status == 0 ? $t("server.statusTrue") : $t("server.statusFalse") }}
							</li>
						</ul>
						<div class="serve-ex-ip">
							<ol>
								<li>{{ item.serverName }}</li>
								<li>{{ item.ip }}</li>
							</ol>
						</div>
						<div class="svg-wrap-text">
							{{ item.purpose }}
						</div>
					</div>
				</div>
			</b-col>
		</b-row>
	</div>
</template>
<script>
import Server from "@/service/server";
import ContentMixin from "@/components/content/mixin";
import { Chart } from "highcharts-vue";
let sse;

export default {
	mixins: [ContentMixin],
	components: {
		HighCharts: Chart
	},
	mounted() {
		this.getSystem();
		this.getDevice();
		this.getServerList();
	},
	computed: {
		chartOptions: {
			cache: false,
			get() {
				return {
					chart: {
						type: "spline",
						height: 228,
						marginRight: 10,
						borderWidth: 0,
						plotBackgroundColor: false,
						plotBorderWidth: false,
						style: {
							fontFamily: "san-serif"
						}
					},

					time: {
						useUTC: false
					},

					title: null,

					xAxis: {
						type: "datetime",
						gridLineColor: "#232f4b",
						tickPixelInterval: 150,
						tickColor: "#232f4b",
						lineColor: "#232f4b",
						labels: {
							style: {
								color: "#61719e"
							}
						}
					},

					yAxis: {
						title: {
							text: null,
							gridLineColor: "#232f4b",
							lineColor: "#232f4b" //라인컬러
						},
						plotLines: [
							{
								value: 0,
								width: 1,
								color: "#808080"
							}
						],
						tickColor: "#232f4b",
						gridLineColor: "#232f4b",
						lineColor: "#232f4b",
						labels: {
							style: {
								color: "#61719e"
							}
						}
					},

					tooltip: {
						headerFormat: "<b>{series.name}</b><br/>",
						pointFormat: "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}"
					},

					legend: {
						enabled: false
					},

					exporting: {
						enabled: false
					},
					credits: { enabled: false },
					series: [
						{
							name: this.$t("server.used"),
							data: this.systemList,
							color: "#7383fd"
						}
					]
				};
			}
		}
	},
	data() {
		return {
			pageName: this.$t("menu.device.server"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.device.title") },
				{ name: this.$t("menu.device.server") }
			],
			system: { jvmFree: 0, jvmMax: 0, jvmTotal: 0, jvmUsed: 0, osCpu: 0, osMemory: 0 },
			systemList: [],
			device: {},
			serverList: []
		};
	},
	methods: {
		getSystem() {
			sse = Server.system(1);
			sse.onerror = function() {};
			sse.onopen = function() {};
			sse.onmessage = e => {
				const data = JSON.parse(e.data).response;
				this.system.jvmFree = data.jvmFree;
				this.system.jvmMax = data.jvmMax;
				this.system.jvmTotal = data.jvmTotal;
				this.system.jvmUsed = data.jvmUsed;
				this.system.osCpu = data.osCpu;
				this.system.osMemory = data.osMemory;

				if (this.systemList.length >= 20) {
					this.systemList.shift();
				}

				// this.systemList.push(data);
				this.systemList.push({
					// x: this.$moment(data.date).format("YYYY-MM-DD HH:mm:ss"),
					x: this.$moment(data.date).valueOf(),
					y: parseFloat(data.osCpu)
				});
			};
		},
		async getDevice() {
			try {
				const response = await Server.device();
				const result = response.data.response;
				this.device = result;
			} catch (error) {
				console.log(error);
			}
		},
		async getServerList() {
			try {
				const response = await Server.list();
				const result = response.data.response;
				this.serverList = result;
			} catch (error) {
				console.log(error);
			}
		}
	},
	beforeDestroy() {
		if (sse) {
			sse.close();
			console.log("Server System SSE Destroyed!!");
		}
	}
};
</script>
