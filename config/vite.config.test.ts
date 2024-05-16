import { defineConfig, mergeConfig, UserConfig } from "vite";
import baseConfig from "./vite.config.base";
import VisualizerPluginConfig from "./plugins/visualizerPlugin";

// @see: https://vitejs.dev/config/
export default defineConfig((): UserConfig => {
	const customConfig = {
		plugin: [
			VisualizerPluginConfig() // 测试环境，打包生成分析报告
		],
		// build configure
		build: {
			outDir: "dist",
			// esbuild 打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
			minify: "esbuild",
			// minify: "terser",
			// terserOptions: {
			// 	compress: {
			// 		drop_console: viteEnv.VITE_DROP_CONSOLE,
			// 		drop_debugger: true
			// 	}
			// },
			rollupOptions: {
				output: {
					// Static resource classification and packaging
					chunkFileNames: "assets/js/[name]-[hash].js",
					entryFileNames: "assets/js/[name]-[hash].js",
					assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
				}
			}
		}
	};

	return mergeConfig(customConfig, baseConfig);
});
