import type { Plugin } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

export default function SvgIconsPluginConfig(): Plugin {
	const svgIconsPlugin = createSvgIconsPlugin({
		iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
		// 图标ID的样式
		symbolId: "icon-[dir]-[name]"
	});
	return svgIconsPlugin;
}
