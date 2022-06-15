import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";

const LoginForm = () => {
	const navigate = useNavigate();
	const onFinish = (values: any) => {
		console.log("Success:", values);
		message.success("登录成功！");
		navigate("/home");
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Form
			name="basic"
			labelCol={{ span: 5 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			size="large"
			autoComplete="off"
		>
			<Form.Item name="username" rules={[{ required: true, message: "Please input your username!" }]}>
				<Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]}>
				<Input placeholder="密码：123456" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button icon={<CloseCircleOutlined />}>重置</Button>
				<Button type="primary" icon={<UserOutlined />}>
					登录
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
