import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { getOpenKeys } from "@/utils/util";
import Logo from "./components/Logo";
import type { MenuProps } from "antd";
import "./index.scss";
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

const LayoutMenu = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
	const [openKeys, setOpenKeys] = useState<string[]>([]);

	useEffect(() => {
		setSelectedKeys([pathname]);
		setOpenKeys(getOpenKeys(pathname));
	}, [pathname]);

	// 设置当前展开的 subMenu
	const onOpenChange = (openKeys: string[]) => {
		if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys);
		const latestOpenKey = openKeys[openKeys.length - 1];
		// 最新展开的 SubMenu
		if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
		setOpenKeys([latestOpenKey]);
	};

	// 点击当前菜单
	const clickMenu: MenuProps["onClick"] = ({ key }: { key: string }) => {
		navigate(key);
	};

	const menuList = [
		{
			label: "首页",
			key: "/home",
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

	return (
		<div className="menu">
			<Logo></Logo>
			<Menu
				theme="dark"
				mode="inline"
				triggerSubMenuAction="click"
				openKeys={openKeys}
				selectedKeys={selectedKeys}
				items={menuList}
				onClick={clickMenu}
				onOpenChange={onOpenChange}
			></Menu>
		</div>
	);
};

export default LayoutMenu;
