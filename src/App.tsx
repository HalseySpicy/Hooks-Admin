import Router from "@/routers/index";
import { BrowserRouter } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
};

export default App;
