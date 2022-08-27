import { useEcharts } from "@/hooks/useEcharts";
import { EChartsOption } from "echarts";
import "./AnnualUseChart.less";

interface ChartProp {
	label: string;
	value: string[];
}

const AnnualUseChart = () => {
	const gradientColors = ["rgba(254, 219, 101,0.1)", "rgba(0, 122, 254,0.1)", "rgba(255, 75, 122, 0.1)"];
	let annualData = [
		{
			label: new Date().getFullYear() - 2 + "年",
			value: ["184", "90", "120", "0", "30", "100", "80", "40", "20", "510", "350", "180"]
		},
		{
			label: new Date().getFullYear() - 1 + "年",
			value: ["118", "509", "366", "162", "380", "123", "321", "158", "352", "474", "154", "22"]
		},
		{
			label: new Date().getFullYear() + "年",
			value: ["548", "259", "113", "90", "69", "512", "23", "49", "28", "420", "313", "156"]
		}
	];
	let data = {
		data: annualData,
		unit: annualData.map(val => val.label),
		columns: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
		colors: ["#FFA600", "#007AFE", "#FF4B7A"]
	};
	const option: EChartsOption = {
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "none"
			},
			borderWidth: 0, //边框线宽
			padding: 0,
			backgroundColor: "transparent",
			formatter: (p: any) => {
				let str = "";
				p.forEach((val: any) => {
					str += `
          <div class="year-item">
            <span class="year-dot" style="background-color: ${val.color};"></span>
            <span class="year-name">${val.seriesName}</span>
            <span class="year-value">${val.data >= 10000 ? (val.data / 10000).toFixed(2) + "w" : val.data}</span>
          </div>
          `;
				});
				let dom = `
                    <div class="annual-tooTip">
                      <span class="annual-month">${p[0].dataIndex + 1}月</span>
                      <div class="annual-list">
                        ${str}
                      </div>
                    </div>
                  `;
				return dom;
			}
		},
		legend: {
			right: "2%",
			top: "0%",
			itemWidth: 15,
			itemHeight: 6,
			align: "auto",
			icon: "rect",
			itemGap: 15,
			textStyle: {
				color: "#ebebf0"
			}
		},
		grid: {
			top: "20%",
			left: "40",
			right: "4%",
			bottom: "15%"
			// containLabel: true
		},
		xAxis: [
			{
				name: "(月份)",
				type: "category",
				boundaryGap: false,
				axisLine: {
					//坐标轴轴线相关设置。数学上的x轴
					show: true,
					lineStyle: {
						color: "#233653"
					}
				},
				axisLabel: {
					//坐标轴刻度标签的相关设置
					color: "#7ec7ff",
					padding: 0,
					fontSize: 12,
					formatter: function (data) {
						return data;
					}
				},
				splitLine: {
					show: false,
					lineStyle: {
						color: "#192a44"
					}
				},
				axisTick: {
					show: false
				},
				data: data.columns
			}
		],
		yAxis: {
			name: "(人数)",
			nameTextStyle: {
				color: "#D6DFEA",
				fontSize: 12,
				padding: [0, 30, 0, 0]
			},
			// nameGap:18,
			minInterval: 1,
			// min: 4,
			splitNumber: 5,
			splitLine: {
				show: false,
				lineStyle: {
					color: "#192a44"
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: "#233653"
				}
			},
			axisLabel: {
				show: true,
				color: "#B9D6D6",
				padding: 0,
				formatter: function (value: any) {
					if (value >= 10000) {
						value = value / 10000 + "w";
					}
					return value;
				}
			},
			axisTick: {
				show: false
			}
		},
		series: data.data.map((val: ChartProp, index: number) => {
			return {
				name: val.label,
				type: "line",
				symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
				showSymbol: false,
				smooth: true,
				lineStyle: {
					width: 1,
					color: data.colors[index], // 线条颜色
					borderColor: data.colors[index]
				},
				itemStyle: {
					color: data.colors[index],
					borderColor: "#646ace",
					borderWidth: 2
				},
				tooltip: {
					show: true
				},
				areaStyle: {
					//区域填充样式
					//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
					color: {
						type: "linear",
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: data.colors[index] // 0% 处的颜色
							},
							{
								offset: 1,
								color: gradientColors[index] // 100% 处的颜色
							}
						],
						global: false // 缺省为 false
					},
					shadowColor: "rgba(25,163,223, 0.3)", //阴影颜色
					shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
				},
				data: val.value
			};
		})
	};
	const [echartsRef] = useEcharts(option, data);
	return <div ref={echartsRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default AnnualUseChart;
