import Layout from "@/layouts/index";
import AuthRouter from "@/routers/util/authRouter";

/**
 * @description: default layout
 */
export const LayoutIndex = () => (
	<AuthRouter>
		<Layout />
	</AuthRouter>
);
