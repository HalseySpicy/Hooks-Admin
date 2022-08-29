import welcome from "@/assets/images/welcome01.png";
import "./index.less";

const Home = () => {
	return (
		<div className="home card">
			<img src={welcome} alt="welcome" />
		</div>
	);
};

export default Home;
