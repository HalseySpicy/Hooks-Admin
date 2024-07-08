import { defineConfig, mergeConfig, UserConfig } from "vite";
import baseConfig from "./vite.config.base";
// @see: https://vitejs.dev/config/
export default defineConfig((): UserConfig => {
	const customConfig = {
		server: {
			host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
			port: 3301,
			open: true,
			cors: true,
			proxy: {
				"/api": {
					target: "https://mock.mengxuegu.com/mock/62abda3212c1416424630a45", // easymock
					changeOrigin: true,
					rewrite: (path: string) => path.replace(/^\/api/, "")
				}
			}
		}
	};

	return mergeConfig(customConfig, baseConfig);
});
