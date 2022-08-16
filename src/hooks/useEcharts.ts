import * as echarts from "echarts";
import { useCallback, useEffect, useRef } from "react";
/**
 * @description 使用Echarts(只是为了添加图表响应式)
 * @param {Element} myChart Echarts实例(必传)
 * @param {Object} options 绘制Echarts的参数(必传)
 * @return deleteEvent 待改善(后期重新写)
 * */
export const useEcharts = (myChart: echarts.ECharts, options: echarts.EChartsCoreOption) => {
	const ref = useRef<echarts.ECharts>();

	const resize = useCallback(() => {
		if (ref.current) {
			ref.current.resize();
		}
	}, []);

	useEffect(() => {
		// ref.current = echarts.init();
		// if (options && typeof options === "object") {
		// 	ref.current.setOption(options);
		// }
		// window.addEventListener("resize", resize);
		// return () => {
		// 	window.removeEventListener("resize", resize);
		// };
	}, [options, myChart]);

	return { echartsInst: ref.current };
};
