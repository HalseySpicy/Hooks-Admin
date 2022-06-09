import { Spin } from "antd";
import "./index.scss";

const Loading = ({ tip = "Loading…" }: { tip?: string }) => {
	return <Spin tip={tip} size="large" />;
};

export default Loading;
