import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { RootState, useDispatch, useSelector } from "@/store";
import { updateCollapse } from "@/redux/modules/menu";

const CollapseIcon = () => {
	const dispatch = useDispatch();
	const { isCollapse } = useSelector((state: RootState) => state.reducer.menu);

	return (
		<div
			className="collapsed"
			onClick={() => {
				dispatch(updateCollapse(!isCollapse));
			}}
		>
			{isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
		</div>
	);
};

export default CollapseIcon;
