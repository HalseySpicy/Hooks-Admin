import { Button } from "antd";
import { getAuthorButtons } from "@/api/modules/login";

const DataScreen = () => {
	const requestMenuList = async () => {
		const res = await getAuthorButtons();
		console.log(res);
	};
	return (
		<div className="content-box">
			<span className="text">DataScreen 🍓🍇🍈🍉</span>
			<Button type="primary" onClick={requestMenuList}>
				发起网络请求
			</Button>
		</div>
	);
};

export default DataScreen;
