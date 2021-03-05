module.exports = {
	devServer: {
		proxy: {
			"/api": {
				//spring rest api를 바로보게 한다.
				target: "http://cass.cnuglobal.co.kr",
				changeOrigin: true,
				logLevel: "debug"
				// pathRewrite: { "^/api": "/api" },
			}
		}
	}
};
