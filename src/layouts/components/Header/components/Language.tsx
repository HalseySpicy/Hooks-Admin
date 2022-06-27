import { Dropdown, Menu } from "antd";
const Language = () => {
	const menu = (
		<Menu
			items={[
				{
					key: "1",
					label: <span>简体中文</span>
				},
				{
					key: "2",
					label: <span>English</span>
				}
			]}
		/>
	);
	return (
		<Dropdown overlay={menu} placement="bottom" trigger={["click"]} arrow={true}>
			<i className="icon-style iconfont icon-zhongyingwen"></i>
		</Dropdown>
	);
};
export default Language;
