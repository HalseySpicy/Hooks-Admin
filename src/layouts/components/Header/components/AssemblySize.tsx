import { Dropdown, Menu } from "antd";
import { setAssemblySize } from "@/redux/modules/global";
import { RootState, useDispatch, useSelector } from "@/redux";
import type { SizeType } from "antd/lib/config-provider/SizeContext";

const AssemblySize = () => {
	const dispatch = useDispatch();
	const { assemblySize } = useSelector((state: RootState) => state.global);

	// 切换组件大小
	const onClick = (e: MenuInfo) => {
		dispatch(setAssemblySize(e.key as SizeType));
	};

	const menu = (
		<Menu
			items={[
				{
					key: "middle",
					disabled: assemblySize == "middle",
					label: <span>默认</span>,
					onClick
				},
				{
					disabled: assemblySize == "large",
					key: "large",
					label: <span>大型</span>,
					onClick
				},
				{
					disabled: assemblySize == "small",
					key: "small",
					label: <span>小型</span>,
					onClick
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

export default AssemblySize;
