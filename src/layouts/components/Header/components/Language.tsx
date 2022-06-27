import { Dropdown, Menu } from "antd";
import i18n from "i18next";
import { localGet } from "@/utils/util";
import { useState } from "react";

const Language = () => {
	const [language, setLanguage] = useState(localGet("i18nextLng"));

	// changeLanguage
	const changeLanguage = (val: string) => {
		i18n.changeLanguage(val);
		setLanguage(localGet("i18nextLng"));
	};

	const menu = (
		<Menu
			items={[
				{
					key: "1",
					label: <span>简体中文</span>,
					onClick: () => changeLanguage("zh"),
					disabled: language === "zh"
				},
				{
					key: "2",
					label: <span>English</span>,
					onClick: () => changeLanguage("en"),
					disabled: language === "en"
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
