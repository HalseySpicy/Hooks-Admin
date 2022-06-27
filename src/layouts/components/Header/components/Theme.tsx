import { Drawer } from "antd";
import { useState } from "react";

const Theme = () => {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	return (
		<>
			<i
				className="icon-style iconfont icon-zhuti"
				onClick={() => {
					showDrawer();
				}}
			></i>
			<Drawer
				title="主题设置"
				closable={false}
				onClose={onClose}
				visible={visible}
				// footerStyle={{ display: "flex", justifyContent: "flex-end" }}
				// footer={
				// 	<Space size={"middle"}>
				// 		<Button onClick={onClose}>Cancel</Button>
				// 		<Button type="primary" onClick={onClose}>
				// 			OK
				// 		</Button>
				// 	</Space>
				// }
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</>
	);
};
export default Theme;
