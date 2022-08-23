import { usePie } from "./usePie";

const Curve = () => {
	const [chart] = usePie();
	return <div ref={chart} style={{ width: "100%", height: "100%" }} />;
};

export default Curve;
