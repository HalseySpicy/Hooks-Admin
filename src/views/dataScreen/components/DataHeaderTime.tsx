import { useTimes } from "@/hooks/useTime";
const DataHeaderTime = () => {
	const { time } = useTimes();

	return <span className="header-time">当前时间：{time}</span>;
};

export default DataHeaderTime;
