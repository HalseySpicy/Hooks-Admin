import { useEcharts } from "@/hooks/useEcharts";
import { EChartsOption } from "echarts";
import { ranking1, ranking2, ranking3, ranking4 } from "../assets/ranking-icon";
import "./HotPlateChart.less";
interface ChartProp {
	name: string;
	value: number;
	percentage: string;
	maxValue: number;
}
const HotPlateChart = () => {
	let data = [
		{
			value: 79999,
			name: "峨眉山",
			percentage: "80%",
			maxValue: 100000
		},
		{
			value: 59999,
			name: "稻城亚丁",
			percentage: "60%",
			maxValue: 100000
		},
		{
			value: 49999,
			name: "九寨沟",
			percentage: "50%",
			maxValue: 100000
		},
		{
			value: 39999,
			name: "万里长城",
			percentage: "40%",
			maxValue: 100000
		},
		{
			value: 29999,
			name: "北京故宫",
			percentage: "30%",
			maxValue: 100000
		}
	];
	const colors = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
	const option: EChartsOption = {
		grid: {
			top: "5%",
			left: "7%",
			right: "4%",
			bottom: "1%",
			containLabel: true
		},
		xAxis: {
			type: "value",
			axisLine: {
				show: false,
				lineStyle: {
					color: "white"
				}
			},
			nameGap: 1,
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false,
				fontSize: 16
			},
			// boundaryGap: ["3%", "2%"],
			// splitNumber: 4,
			triggerEvent: false
		},
		yAxis: [
			{
				show: true,
				data: data.map((val: ChartProp) => val.name),
				inverse: true,
				axisLine: {
					show: false
				},
				splitLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					color: "#fff",
					formatter: function (value: any) {
						let str = value.length > 6 ? value.slice(0, 6) + "..." : value;
						let index = data.map((item: ChartProp) => item.name).indexOf(value) + 1;
						return ["{" + (index > 3 ? "lg" : "lg" + index) + "|NO." + index + "}", "{title|" + str + "}"].join(" ");
					},
					rich: {
						lg1: {
							width: 60,
							backgroundColor: {
								image: ranking1
							},
							color: "#fff",
							align: "center",
							height: 20,
							fontSize: 13
						},
						lg2: {
							width: 60,
							backgroundColor: {
								image: ranking2
							},
							color: "#fff",
							align: "center",
							height: 20,
							fontSize: 13
						},
						lg3: {
							width: 60,
							backgroundColor: {
								image: ranking3
							},
							color: "#fff",
							align: "center",
							height: 20,
							fontSize: 13
						},
						lg: {
							width: 60,
							backgroundColor: {
								image: ranking4
							},
							color: "#fff",
							align: "center",
							height: 20,
							fontSize: 13
						},
						title: {
							width: 60,
							fontSize: 13,
							align: "center",
							padding: [0, 10, 0, 15]
						}
					}
				},
				triggerEvent: false
			},
			{
				show: true,
				inverse: true,
				data: data,
				axisLabel: {
					fontSize: 14,
					color: "#fff",
					// align: "right",
					margin: 20,
					formatter: (value: any) => {
						return value >= 10000 ? (value / 10000).toFixed(2) + "w" : value;
					}
				},
				axisLine: {
					show: false
				},
				splitLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				triggerEvent: false
			}
		],
		series: [
			{
				name: "条",
				type: "bar",
				yAxisIndex: 0,
				data: data,
				barWidth: 12,
				itemStyle: {
					borderRadius: 30,
					color: function (params) {
						let num = colors.length;
						return colors[params.dataIndex % num];
					}
				},
				label: {
					show: true,
					position: [12, 0],
					lineHeight: 14,
					color: "#fff",
					formatter: (params: any) => {
						return params.data.percentage;
					}
				}
			},
			{
				name: "框",
				type: "bar",
				yAxisIndex: 1,
				data: data.map((val: ChartProp) => {
					if (!val.maxValue) {
						return 5;
					}
					return val.maxValue;
				}),
				barWidth: 18,
				itemStyle: {
					color: "none",
					borderColor: "#00c1de",
					borderWidth: 1,
					borderRadius: 15
				},
				silent: true
			}
		]
	};
	const [echartsRef] = useEcharts(option, data);
	return (
		<>
			<div className="echarts-header">
				<span>排名</span>
				<span>景区</span>
				<span>预约数量</span>
			</div>
			<div ref={echartsRef} className="hot-echarts"></div>
		</>
	);
};

export default HotPlateChart;
