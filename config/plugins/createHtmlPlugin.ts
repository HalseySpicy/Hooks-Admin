import type { PluginOption } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default function CreateHtmlPluginConfig(title: string = "Hooks-Admin"): PluginOption {
	return createHtmlPlugin({
		inject: {
			data: {
				title: title
			}
		}
	});
}

// createHtmlPlugin({
// 	inject: {
// 		data: {
// 			title: viteEnv.VITE_GLOB_APP_TITLE
// 		}
// 	}
// }),
