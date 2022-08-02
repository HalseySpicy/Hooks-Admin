import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import { RootState, useSelector } from "@/redux";

const BreadcrumbNav = () => {
	const { pathname } = useLocation();
	const breadcrumbState = useSelector((state: RootState) => state.breadcrumb);
	const breadcrumbList = breadcrumbState.breadcrumbList[pathname] || [];

	return (
		<Breadcrumb>
			<Breadcrumb.Item href={`#${HOME_URL}`}>首页</Breadcrumb.Item>
			{breadcrumbList.map((item: string) => {
				return <Breadcrumb.Item key={item}>{item !== "首页" ? item : null}</Breadcrumb.Item>;
			})}
		</Breadcrumb>
	);
};

export default BreadcrumbNav;
