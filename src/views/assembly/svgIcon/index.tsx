import { Alert, Descriptions } from "antd";
import SvgIcon from "@/components/svgIcon";
import "./index.less";

const svgIcon = () => {
	return (
		<div className="card content-box">
			<Alert
				message="SVG 图标目前使用 vite-plugin-svg-icons 插件完成，官方文档请查看 ：https://github.com/vbenjs/vite-plugin-svg-icons"
				style={{ width: "100%" }}
				type="warning"
			/>
			<br />
			<div className="icon-list">
				<SvgIcon name="xianxingdaoyu" />
				<SvgIcon name="xianxingdiqiu" />
				<SvgIcon name="xianxingditu" />
				<SvgIcon name="xianxingfanchuan" />
				<SvgIcon name="xianxingfeiji" />
				<SvgIcon name="xianxinglvhangriji" />
				<SvgIcon name="xianxingtianqiyubao" />
				<SvgIcon name="xianxingxiangjipaizhao" />
				<SvgIcon name="xianxingxiarilengyin" />
				<SvgIcon name="xianxingyoulun" />
				<SvgIcon name="xianxingxiarilengyin" />
			</div>
			<Descriptions title="配置项 📚" bordered className="antd-descriptions" column={1}>
				<Descriptions.Item label="name">图标的名称，svg 图标必须存储在 src/assets/icons 目录下</Descriptions.Item>
				<Descriptions.Item label="prefix">图标的前缀，默认为icon</Descriptions.Item>
				<Descriptions.Item label="iconStyle"> 图标的样式，默认样式为 {"{ width: 100px, height: 100px}"} </Descriptions.Item>
			</Descriptions>
		</div>
	);
};

export default svgIcon;
