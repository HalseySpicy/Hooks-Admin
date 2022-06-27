import { useEffect } from "react";
import { connect } from "react-redux";
import { Table, DatePicker } from "antd";
import "./index.less";

const UseHooks = (props: any) => {
	const { RangePicker } = DatePicker;
	useEffect(() => {
		console.log(props.authButtons);
	}, []);

	// const dataSource = [
	// 	{
	// 		key: "1",
	// 		name: "胡彦斌",
	// 		age: 32,
	// 		address: "西湖区湖底公园1号"
	// 	},
	// 	{
	// 		key: "2",
	// 		name: "胡彦祖",
	// 		age: 42,
	// 		address: "西湖区湖底公园1号"
	// 	}
	// ];

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
			<RangePicker /> <Table dataSource={[]} columns={columns} />
		</>
	);
};

const mapStateToProps = (state: any) => state.auth;
export default connect(mapStateToProps)(UseHooks);
