import { Button, Dropdown, Menu, Tabs, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { HomeFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import { connect } from "react-redux";
import { setTabsList } from "@/redux/modules/tabs/action";
import { routerArray } from "@/routers";
import { searchRoute } from "@/utils/util";
import "./index.less";

const LayoutTabs = (props: any) => {
	const { TabPane } = Tabs;
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [activeValue, setActiveValue] = useState<string>(pathname);

	useEffect(() => {
		addTabs();
	}, [pathname]);

	// click tabs
	const clickTabs = (path: string) => {
		navigate(path);
	};

	// add tabs
	const addTabs = () => {
		const route = searchRoute(pathname, routerArray);
		let tabsList = JSON.parse(JSON.stringify(props.tabsList));
		if (props.tabsList.every((item: any) => item.path !== route.path)) {
			tabsList.push({ title: route.meta!.title, path: route.path });
		}
		props.setTabsList(tabsList);
		setActiveValue(pathname);
	};

	// delete tabs
	const delTabs = () => {
		if (pathname === HOME_URL) return;
		props.tabsList.forEach((item: Menu.MenuOptions, index: number) => {
			if (item.path !== pathname) return;
			const nextTab = props.tabsList[index + 1] || props.tabsList[index - 1];
			if (!nextTab) return;
			navigate(nextTab.path);
		});
		message.success("你删除了Tabs标签 😆😆😆");
		props.setTabsList(props.tabsList.filter((item: Menu.MenuOptions) => item.path !== pathname));
	};

	// close multipleTab
	const closeMultipleTab = (tabPath?: string) => {
		const handleTabsList = props.tabsList.filter((item: Menu.MenuOptions) => {
			return item.path === tabPath || item.path === HOME_URL;
		});
		props.setTabsList(handleTabsList);
		tabPath ?? navigate(HOME_URL);
	};

	const menu = (
		<Menu
			items={[
				{
					key: "1",
					label: <span>关闭当前</span>,
					onClick: delTabs
				},
				{
					key: "2",
					label: <span>关闭其它</span>,
					onClick: () => closeMultipleTab(pathname)
				},
				{
					key: "3",
					label: <span>关闭所有</span>,
					onClick: () => closeMultipleTab()
				}
			]}
		/>
	);

	return (
		<div className="tabs">
			<Tabs
				activeKey={activeValue}
				onChange={clickTabs}
				hideAdd
				type="editable-card"
				onEdit={() => {
					delTabs();
				}}
			>
				{props.tabsList.map((item: Menu.MenuOptions) => {
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
			<Dropdown overlay={menu} placement="bottom" arrow={{ pointAtCenter: true }} trigger={["click"]}>
				<Button className="more-button" type="primary" size="small">
					更多 <DownOutlined />
				</Button>
			</Dropdown>
		</div>
	);
};

const mapStateToProps = (state: any) => state.tabs;
const mapDispatchToProps = { setTabsList };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutTabs);
