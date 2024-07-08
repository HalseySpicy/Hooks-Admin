import type { Plugin } from "vite";
import eslintPlugin from "vite-plugin-eslint";

export default function EslintPluginConfig(): Plugin {
	return eslintPlugin();
}
