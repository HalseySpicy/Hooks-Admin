import { useCurve } from "./useCurve";

const Curve = () => {
	const [chart] = useCurve();
	return <div ref={chart} style={{ width: "100%", height: "100%" }} />;
};

export default Curve;
