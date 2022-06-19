import { useLocation } from "react-router-dom";
import welcome from "@/assets/images/welcome.png";
import "./index.scss";

const Home = () => {
	const location = useLocation();
	console.log(location);

	return (
		<div className="home">
			<img src={welcome} alt="welcome" />
		</div>
	);
};

export default Home;
