import type { Plugin } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
export default function VisualizerPluginConfig(): Plugin {
	return visualizer();
}
