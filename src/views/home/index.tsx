import welcome from "@/assets/images/welcome.png";
import "./index.less";

const Home = () => {
	return (
		<div className="home">
			<img src={welcome} alt="welcome" />
		</div>
	);
};

export default Home;
