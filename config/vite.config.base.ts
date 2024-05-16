import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import SvgIconsPluginConfig from "./plugins/svgIconsPlugin";
import createHtmlPluginConfig from "./plugins/createHtmlPlugin";
import EslintPluginConfig from "./plugins/eslintPlugin";

// @see: https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		createHtmlPluginConfig("Hooks-Admin"),
		SvgIconsPluginConfig(), // 使用 svg 图标

		EslintPluginConfig() // EsLint 报错信息显示在浏览器界面上
	],
	resolve: {
		// 文件系统路径别名
		alias: [
			{
				find: "@",
				replacement: resolve(__dirname, "../src")
			},
			{
				find: "assets",
				replacement: resolve(__dirname, "../src/assets")
			},
			{
				find: "api",
				replacement: resolve(__dirname, "../src/api")
			}
		],
		extensions: [".ts", ".js"]
	},
	// global css
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				additionalData: `@import "@/styles/var.less";`
			}
		}
	}
});
