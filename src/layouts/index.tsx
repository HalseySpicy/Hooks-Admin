import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Layout } from "antd";
import LayoutMenu from "./components/Menu";
import LayoutHeader from "./components/Header";
import LayoutTabs from "./components/Tabs";
import LayoutFooter from "./components/Footer";
import { connect } from "react-redux";
import "./index.less";

const { Sider, Content } = Layout;

const LayoutIndex = (props: any) => {
	const { pathname } = useLocation();

	return (
		<section className="container">
			<Sider trigger={null} collapsed={props.isCollapse} width={220} theme="dark">
				<LayoutMenu></LayoutMenu>
			</Sider>
			<Layout>
				<LayoutHeader></LayoutHeader>
				<LayoutTabs></LayoutTabs>
				<Content>
					<TransitionGroup className="content">
						{/* exit：表示退出当前页面的时候是否有动画 */}
						<CSSTransition key={pathname} timeout={200} classNames="fade" exit={false}>
							<Outlet></Outlet>
						</CSSTransition>
					</TransitionGroup>
				</Content>
				<LayoutFooter></LayoutFooter>
			</Layout>
		</section>
	);
};

// * react-redux写法(高阶组件)
// * connect具有两个参数，第一个参数是mapStateToProps，第二个参数是mapDispatchToProps
const mapStateToProps = (state: any) => state.menu;
export default connect(mapStateToProps)(LayoutIndex);
