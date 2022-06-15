import { useRef } from "react";
import { Avatar, Modal, Menu, Dropdown, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import PasswordModal from "./PasswordModal";
import InfoModal from "./InfoModal";
import avatar from "@/assets/images/avatar.png";

const AvatarIcon = () => {
	const navigate = useNavigate();
	interface ModalProps {
		showModal: (params: { name: number }) => void;
	}
	const passRef = useRef<ModalProps>(null!);
	const infoRef = useRef<ModalProps>(null!);
	const goHome = () => {
		navigate("/home");
	};

	const logout = () => {
		Modal.confirm({
			title: "温馨提示 🧡",
			icon: <ExclamationCircleOutlined />,
			content: "是否确认退出登录？",
			okText: "确认",
			cancelText: "取消",
			onOk: () => {
				message.success("退出登录成功！");
				navigate("/login");
			}
		});
	};

	const menu = (
		<Menu
			items={[
				{
					label: (
						<span className="dropdown-item" onClick={goHome}>
							首页
						</span>
					),
					key: "0"
				},
				{
					label: (
						<span className="dropdown-item" onClick={() => infoRef.current.showModal({ name: 11 })}>
							个人信息
						</span>
					),
					key: "1"
				},
				{
					label: (
						<span className="dropdown-item" onClick={() => passRef.current.showModal({ name: 11 })}>
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
				<Avatar src={avatar} />
			</Dropdown>
			<InfoModal innerRef={infoRef}></InfoModal>
			<PasswordModal innerRef={passRef}></PasswordModal>
		</>
	);
};

export default AvatarIcon;
