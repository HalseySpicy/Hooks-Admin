/**
 * Used to package and output gzip. Note that this does not work properly in Vite, the specific reason is still being investigated
 * gzip压缩
 * https://github.com/anncwb/vite-plugin-compression
 */
import type { Plugin } from "vite";
import compressPlugin from "vite-plugin-compression";
export default function CompressPluginConfig(pluginConfig?: any): Plugin {
	const defaultPluginConfig = {
		verbose: true, // 是否在控制台中输出压缩结果
		disable: false, // 是否禁用
		threshold: 10240, // 如果体积大于阈值，则进行压缩，单位为b
		algorithm: "gzip", // 压缩算法，可选['gzip'，'brotliCompress'，'deflate'，'deflateRaw']
		ext: ".gz" // 生成的压缩包的后缀
	};
	const config = Object.assign(defaultPluginConfig, pluginConfig);
	return compressPlugin(config);
}
