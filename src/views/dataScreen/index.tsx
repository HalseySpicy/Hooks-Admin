import { Button } from "antd";
import { getMenuList } from "@/api/modules/login";

const dataScreen = () => {
	const requestMenuList = async () => {
		const res = await getMenuList();
		console.log(res);
	};
	return (
		<Button type="primary" onClick={requestMenuList}>
			发起网络请求
		</Button>
	);
};

export default dataScreen;
