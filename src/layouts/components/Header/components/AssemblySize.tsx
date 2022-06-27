import { Dropdown, Menu } from "antd";
import { setAssemblySize } from "@/redux/modules/global/action";
import { connect } from "react-redux";

const AssemblySize = (props: any) => {
	const menu = (
		<Menu
			items={[
				{
					key: "middle",
					disabled: props.assemblySize == "middle",
					label: <span>默认</span>,
					onClick: e => {
						console.log(e);
						props.setAssemblySize(e.key);
					}
				},
				{
					disabled: props.assemblySize == "large",
					key: "large",
					label: <span>大型</span>,
					onClick: e => {
						console.log(e);
						props.setAssemblySize(e.key);
					}
				},
				{
					disabled: props.assemblySize == "small",
					key: "small",
					label: <span>小型</span>,
					onClick: e => {
						console.log(e);
						props.setAssemblySize(e.key);
					}
				}
			]}
		/>
	);
	return (
		<Dropdown overlay={menu} placement="bottom" trigger={["click"]} arrow={true}>
			<i className="icon-style iconfont icon-contentright"></i>
		</Dropdown>
	);
};

const mapStateToProps = (state: any) => state.global;
const mapDispatchToProps = { setAssemblySize };
export default connect(mapStateToProps, mapDispatchToProps)(AssemblySize);
