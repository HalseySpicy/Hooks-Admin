import { useEffect, useState } from "react";
import {
	HomeOutlined,
	TableOutlined,
	PieChartOutlined,
	FileTextOutlined,
	AreaChartOutlined,
	FundOutlined,
	ShoppingOutlined,
	AppstoreOutlined
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import Logo from "./components/Logo";
import type { MenuProps } from "antd";
import "./index.scss";

const LayoutMenu = () => {
	const { pathname } = useLocation();
	const [menuActive, setMenuActive] = useState(pathname);
	const getSubMenuActive = () => {
		menuList.forEach(item => {
			if (item.children) {
				item.children.forEach(child => {
					if (child.key == pathname) {
						setSubMenuActive(item.key);
					}
				});
			}
		});
	};

	useEffect(() => {
		getSubMenuActive();
		setMenuActive(pathname);
	}, [pathname]);

	const menuList = [
		{
			label: "首页",
			key: "/home",
			danger: false,
			icon: <HomeOutlined />
		},
		{
			label: "数据大屏",
			key: "/dataScreen",
			icon: <AreaChartOutlined />
		},
		{
			label: "超级表格",
			key: "/proTable",
			icon: <TableOutlined />,
			children: [
				{
					label: "使用 Hooks",
					key: "/proTable/useHooks",
					icon: <AppstoreOutlined />
				},
				{
					label: "使用 Component",
					key: "/proTable/useComponent",
					icon: <AppstoreOutlined />
				}
			]
		},
		{
			label: "Dashboard",
			key: "/dashboard",
			icon: <FundOutlined />,
			children: [
				{
					key: "/dashboard/dataVisualize",
					label: "数据可视化",
					icon: <AppstoreOutlined />
				},
				{
					key: "/dashboard/embedded",
					label: "内嵌页面",
					icon: <AppstoreOutlined />
				}
			]
		},
		{
			label: "表单 Form",
			key: "/form",
			icon: <FileTextOutlined />,
			children: [
				{
					key: "/form/basicForm",
					label: "基础 Form",
					icon: <AppstoreOutlined />
				},
				{
					key: "/form/validateForm",
					label: "校验 Form",
					icon: <AppstoreOutlined />
				},
				{
					key: "/form/dynamicForm",
					label: "动态 Form",
					icon: <AppstoreOutlined />
				}
			]
		},
		{
			label: "Echarts",
			key: "/echarts",
			icon: <PieChartOutlined />,
			children: [
				{
					key: "/echarts/waterChart",
					label: "水型图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/columnChart",
					label: "柱状图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/lineChart",
					label: "折线图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/pieChart",
					label: "饼图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/radarChart",
					label: "雷达图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/nestedChart",
					label: "嵌套环形图",
					icon: <AppstoreOutlined />
				}
			]
		},
		{
			label: "常用组件",
			key: "/assembly",
			icon: <ShoppingOutlined />,
			children: [
				{
					key: "/assembly/selectIcon",
					label: "Icon 选择",
					icon: <AppstoreOutlined />
				},
				{
					key: "/assembly/batchImport",
					label: "批量导入数据",
					icon: <AppstoreOutlined />
				}
			]
		}
	];

	const navigate = useNavigate();
	// 点击当前菜单
	const clickMenu: MenuProps["onClick"] = e => {
		navigate(e.key);
	};

	const [subMenuActive, setSubMenuActive] = useState("");

	// 设置当前展开的 subMenu
	const openSubMenu = (openKeys: any) => {
		if (openKeys.length == 0) return setSubMenuActive("");
		setSubMenuActive(openKeys[1]);
	};

	return (
		<div className="menu">
			<Logo></Logo>
			<Menu
				theme="dark"
				mode="inline"
				triggerSubMenuAction="click"
				openKeys={[subMenuActive]}
				selectedKeys={[menuActive]}
				items={menuList}
				onClick={clickMenu}
				onOpenChange={openSubMenu}
			></Menu>
		</div>
	);
};

export default LayoutMenu;
