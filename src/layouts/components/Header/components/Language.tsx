import { Dropdown, Menu } from "antd";
import { connect } from "react-redux";
import { setLanguage } from "@/redux/modules/global/action";
import { getBrowserLang } from "@/utils/util";
import i18n from "i18next";
import { useState, useEffect } from "react";

const Language = (props: any) => {
	const [language, setLanguage] = useState(props.language);
	useEffect(() => {
		setLanguage(props.language || getBrowserLang());
		i18n.changeLanguage(props.language || getBrowserLang());
	}, [props.language]);

	const changeLanguage = (val: string) => {
		props.setLanguage(val);
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

const mapStateToProps = (state: any) => state.global;
const mapDispatchToProps = { setLanguage };
export default connect(mapStateToProps, mapDispatchToProps)(Language);
