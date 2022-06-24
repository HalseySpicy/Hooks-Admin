import Router from "@/routers/index";
import { HashRouter } from "react-router-dom";

const App = () => {
	return (
		<HashRouter>
			<Router />
		</HashRouter>
	);
};

export default App;
