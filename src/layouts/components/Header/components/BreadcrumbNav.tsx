import { Breadcrumb } from "antd";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { routerArray } from "@/routers/index";
import { searchRoute } from "@/utils/util";
import { LayoutTitleContext } from "@/routers/constant";

const BreadcrumbNav = () => {
	const { pathname } = useLocation();
	const route = searchRoute(pathname, routerArray);
	const props: { title?: string } = useContext(LayoutTitleContext);
	let breadcrumbList: any[] = [];
	if (props!.title) breadcrumbList = [props!.title, route.meta!.title];
	else breadcrumbList = [route.meta!.title];

	console.log(breadcrumbList);

	return (
		<Breadcrumb>
			<Breadcrumb.Item>首页</Breadcrumb.Item>
			<Breadcrumb.Item>超级表格</Breadcrumb.Item>
			<Breadcrumb.Item>使用 Hooks</Breadcrumb.Item>
		</Breadcrumb>
	);
};

export default BreadcrumbNav;
