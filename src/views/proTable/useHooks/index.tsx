import "./index.less";
import { Table } from "antd";
import { useLocation } from "react-router-dom";
import { rootRouter } from "@/routers/index";
import { searchRouteDetail } from "@/utils/util";

const UseHooks = () => {
	const location = useLocation();

	const res = searchRouteDetail(location.pathname, rootRouter);
	console.log(res);

	const dataSource = [
		{
			key: "1",
			name: "胡彦斌",
			age: 32,
			address: "西湖区湖底公园1号"
		},
		{
			key: "2",
			name: "胡彦祖",
			age: 42,
			address: "西湖区湖底公园1号"
		}
	];

	const columns = [
		{
			title: "姓名",
			dataIndex: "name",
			key: "name"
		},
		{
			title: "年龄",
			dataIndex: "age",
			key: "age"
		},
		{
			title: "住址",
			dataIndex: "address",
			key: "address"
		}
	];
	return <Table dataSource={dataSource} columns={columns} />;
};

export default UseHooks;
