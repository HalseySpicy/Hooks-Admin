import { useRef } from "react";
import { Avatar, Modal, Menu, Dropdown, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import { connect } from "react-redux";
import { setToken } from "@/redux/modules/global/action";
import PasswordModal from "./PasswordModal";
import InfoModal from "./InfoModal";
import avatar from "@/assets/images/avatar.png";

const AvatarIcon = (props: any) => {
	const navigate = useNavigate();
	interface ModalProps {
		showModal: (params: { name: number }) => void;
	}
	const passRef = useRef<ModalProps>(null);
	const infoRef = useRef<ModalProps>(null);
	const goHome = () => {
		navigate(HOME_URL);
	};

	const logout = () => {
		Modal.confirm({
			title: "温馨提示 🧡",
			icon: <ExclamationCircleOutlined />,
			content: "是否确认退出登录？",
			okText: "确认",
			cancelText: "取消",
			onOk: () => {
				props.setToken("");
				message.success("退出登录成功！");
				navigate("/login");
			}
		});
	};

	// Dropdown Menu 内容
	const menu = (
		<Menu
			items={[
				{
					label: (
						<span className="dropdown-item" onClick={goHome}>
							首页
						</span>
					),
					key: "1"
				},
				{
					label: (
						<span className="dropdown-item" onClick={() => infoRef.current!.showModal({ name: 11 })}>
							个人信息
						</span>
					),
					key: "2"
				},
				{
					label: (
						<span className="dropdown-item" onClick={() => passRef.current!.showModal({ name: 11 })}>
							修改密码
						</span>
					),
					key: "3"
				},
				{
					type: "divider"
				},
				{
					label: (
						<span className="dropdown-item" onClick={logout}>
							退出登录
						</span>
					),
					key: "4"
				}
			]}
		></Menu>
	);
	return (
		<>
			<Dropdown overlay={menu} placement="bottom" arrow trigger={["click"]}>
				<Avatar size="large" src={avatar} />
			</Dropdown>
			<InfoModal innerRef={infoRef}></InfoModal>
			<PasswordModal innerRef={passRef}></PasswordModal>
		</>
	);
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(AvatarIcon);
