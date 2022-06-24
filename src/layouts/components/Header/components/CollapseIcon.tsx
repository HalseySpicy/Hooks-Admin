import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { updateCollapse } from "@/redux/modules/menu/action";

const CollapseIcon = (props: any) => {
	return (
		<div
			className="collapsed"
			onClick={() => {
				props.updateCollapse(!props.isCollapse);
			}}
		>
			{props.isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
		</div>
	);
};

const mapStateToProps = (state: any) => state.menu;
const mapDispatchToProps = { updateCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(CollapseIcon);
