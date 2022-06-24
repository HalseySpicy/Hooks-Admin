import Layout from "@/layouts/index";
import AuthRouter from "@/routers/authRouter";

/**
 * @description: default layout
 */
export const LayoutIndex = () => (
	<AuthRouter>
		<Layout />
	</AuthRouter>
);
