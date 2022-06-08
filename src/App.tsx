import { useState } from "react";
import logo from "@/assets/images/logo.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello Vite + React!</p>
				<p>
					<button type="button" onClick={() => setCount(count => count + 1)}>
						count is: {count}
					</button>
				</p>
			</header>
		</div>
	);
}

export default App;
