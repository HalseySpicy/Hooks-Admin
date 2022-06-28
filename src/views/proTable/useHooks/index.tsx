import { useEffect } from "react";
import { connect } from "react-redux";
import { Table, DatePicker } from "antd";
import useAuthButtons from "@/hooks/useAuthButtons";
import "./index.less";

const UseHooks = () => {
	// 按钮权限
	const { BUTTONS } = useAuthButtons();
	const { RangePicker } = DatePicker;

	useEffect(() => {
		console.log(BUTTONS);
	}, []);

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
	return (
		<>
			{BUTTONS.add ? <RangePicker /> : null}
			<Table dataSource={dataSource} columns={columns} />
		</>
	);
};

const mapStateToProps = (state: any) => state.auth;
export default connect(mapStateToProps)(UseHooks);
