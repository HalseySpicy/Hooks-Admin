import LoginForm from "./components/LoginForm";
import loginLeft from "@/assets/images/login_left4.png";
import logo from "@/assets/images/logo.png";

import "./index.scss";

const Login = () => {
	return (
		<div className="login-container">
			<div className="login-content">
				<div className="login-left">
					<img src={loginLeft} alt="login" />
				</div>
				<div className="login-form">
					<div className="login-logo">
						<img className="login-icon" src={logo} alt="logo" />
						<span className="logo-text">Hooks-Admin</span>
					</div>
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
