import * as echarts from "echarts";
/**
 * @description 使用Echarts(只是为了添加图表响应式)
 * @param {Element} myChart Echarts实例(必传)
 * @param {Object} options 绘制Echarts的参数(必传)
 * @return void
 * */
const useEcharts = (myChart: echarts.ECharts, options: echarts.EChartsCoreOption) => {
	if (options && typeof options === "object") {
		myChart.setOption(options);
	}

	const echartsResize = () => {
		myChart && myChart.resize();
	};

	const addEvent = () => {
		window.addEventListener("resize", echartsResize, false);
	};

	addEvent();

	const deleteEvent = () => {
		window.removeEventListener("resize", echartsResize);
	};

	return { deleteEvent };
};

export default useEcharts;
