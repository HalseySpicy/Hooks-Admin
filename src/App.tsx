import { RouterGuard } from "@/routers/routerGuard";
import { HashRouter } from "react-router-dom";
import rootRouter from "@/routers/index";

const App = () => {
	return (
		<HashRouter>
			<RouterGuard routes={rootRouter} />
		</HashRouter>
	);
};

export default App;
