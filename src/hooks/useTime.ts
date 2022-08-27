import { useEffect, useState } from "react";

/**
 * @description 获取本地时间
 */
export const useTime = () => {
	const [year, setYear] = useState(0); // 年份
	const [month, setMonth] = useState(0); // 月份
	const [week, setWeek] = useState(""); // 星期几
	const [day, setDay] = useState(0); // 天数
	const [hour, setHour] = useState<number | string>(0); // 小时
	const [minute, setMinute] = useState<number | string>(0); // 分钟
	const [second, setSecond] = useState<number | string>(0); // 秒
	const [nowTime, setNowTime] = useState<string>(""); // 当前时间

	// 更新时间
	const updateTime = () => {
		const date = new Date();
		setYear(date.getFullYear());
		setMonth(date.getMonth() + 1);
		setWeek("日一二三四五六".charAt(date.getDay()));
		setDay(date.getDate());
		setHour(
			(date.getHours() + "")?.padStart(2, "0") ||
				new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(date.getHours())
		);
		setMinute(
			(date.getMinutes() + "")?.padStart(2, "0") ||
				new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(date.getMinutes())
		);
		setSecond(
			(date.getSeconds() + "")?.padStart(2, "0") ||
				new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(date.getSeconds())
		);
		setNowTime(`${year}年${month}月${day} ${hour}:${minute}:${second}`);
	};

	useEffect(() => {
		updateTime();
	}, []);

	return { year, month, day, hour, minute, second, week, nowTime };
};
