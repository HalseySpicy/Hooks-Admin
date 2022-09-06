import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { Login } from "@/api/interface";
import { HOME_URL } from "@/config/config";
import { useTranslation } from "react-i18next";
import { setTabsList } from "@/store/slice/tabsSlice";
import { setToken } from "@/store/slice/globalSlice";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import md5 from "js-md5";
import { useLoginMutation } from "@/store/api/loginApi";
import { HttpResult } from "@/store/interface";
import { useDispatch } from "react-redux";

const LoginForm = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [form] = Form.useForm();
	const [login, { isLoading }] = useLoginMutation();

	// login
	const onFinish = async (loginForm: Login.ReqLoginForm) => {
		try {
			loginForm.password = md5(loginForm.password);
			const { data } = (await login(loginForm)) as HttpResult;
			console.log(data.data!.access_token);
			dispatch(setToken(data.data!.access_token));
			dispatch(setTabsList([]));
			message.success("登录成功！");
			navigate(HOME_URL);
		} catch (error) {
			console.log("error", error);
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Form
			form={form}
			name="basic"
			labelCol={{ span: 5 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			size="large"
			autoComplete="off"
		>
			<Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
				<Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
				<Input.Password autoComplete="new-password" placeholder="密码：123456" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button
					onClick={() => {
						form.resetFields();
					}}
					icon={<CloseCircleOutlined />}
				>
					{t("login.reset")}
				</Button>
				<Button type="primary" htmlType="submit" loading={isLoading} icon={<UserOutlined />}>
					{t("login.confirm")}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
