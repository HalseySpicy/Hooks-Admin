import { Tabs, message } from "antd";
import { HomeFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import "./index.less";

const LayoutTabs = () => {
	const { TabPane } = Tabs;
	const { pathname } = useLocation();
	const [activeValue, setActiveValue] = useState<string>(pathname);
	const [tabsList] = useState([
		{
			title: "首页",
			path: HOME_URL
		},
		{
			title: "数据大屏",
			path: "/dataScreen/index"
		},
		{
			title: "使用 Hooks",
			path: "/proTable/useHooks"
		},
		{
			title: "使用 Component",
			path: "/proTable/useComponent"
		},
		{
			title: "数据可视化",
			path: "/dashboard/dataVisualize"
		},
		{
			title: "内嵌页面",
			path: "/dashboard/embedded"
		}
	]);

	useEffect(() => {
		setActiveValue(pathname);
	}, [pathname]);

	const navigate = useNavigate();

	const tabsClick = (path: string) => {
		navigate(path);
	};

	const delTabs = (path: string) => {
		console.log(path);
		message.success("删除Tabs标签 😆😆😆");
	};

	return (
		<Tabs
			activeKey={activeValue}
			onChange={tabsClick}
			hideAdd
			type="editable-card"
			onEdit={path => {
				delTabs(path as string);
			}}
		>
			{tabsList.map((item: Menu.MenuOptions) => {
				return (
					<TabPane
						key={item.path}
						tab={
							<span>
								{item.path == HOME_URL ? <HomeFilled /> : ""}
								{item.title}
							</span>
						}
						closable={item.path !== HOME_URL}
					></TabPane>
				);
			})}
		</Tabs>
	);
};

export default LayoutTabs;
