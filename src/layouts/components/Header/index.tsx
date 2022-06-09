import { Layout } from "antd";
import AvatarIcon from "./components/AvatarIcon";
import CollapseIcon from "./components/CollapseIcon";
import BreadcrumbNav from "./components/BreadcrumbNav";
import "./index.scss";

const { Header } = Layout;

const LayoutHeader = () => {
	return (
		<Header>
			<div className="header-lf">
				<CollapseIcon />
				<BreadcrumbNav />
			</div>
			<div className="header-ri">
				<AvatarIcon />
			</div>
		</Header>
	);
};
export default LayoutHeader;
