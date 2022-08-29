import { Button, Form, Input, Select, Space, message } from "antd";
import "./index.less";

const ValidateForm = () => {
	const { Option } = Select;
	const [form] = Form.useForm();

	const onGenderChange = (value: string) => {
		switch (value) {
			case "male":
				form.setFieldsValue({ note: "Hi, man!" });
				return;
			case "female":
				form.setFieldsValue({ note: "Hi, lady!" });
				return;
			case "other":
				form.setFieldsValue({ note: "Hi there!" });
		}
	};

	const onFinish = (values: any) => {
		message.success("提交的数据为 : " + JSON.stringify(values));
		console.log(JSON.stringify(values));
	};

	const onReset = () => {
		form.resetFields();
	};

	const onFill = () => {
		form.setFieldsValue({
			user: "mark",
			note: "Hello world!",
			gender: "male"
		});
	};

	return (
		<div className="card content-box">
			<Form form={form} name="control-hooks" onFinish={onFinish} labelCol={{ span: 1 }}>
				<Form.Item name="user" label="User" rules={[{ required: true }]}>
					<Input placeholder="Please enter a user" />
				</Form.Item>
				<Form.Item name="note" label="Note" rules={[{ required: true }]}>
					<Input placeholder="Please enter a user note" />
				</Form.Item>
				<Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
					<Select placeholder="Select a option and change input text above" onChange={onGenderChange} allowClear>
						<Option value="male">male</Option>
						<Option value="female">female</Option>
						<Option value="other">other</Option>
					</Select>
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 1 }}>
					<Space>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
						<Button htmlType="button" onClick={onReset}>
							Reset
						</Button>
						<Button type="link" htmlType="button" onClick={onFill}>
							Fill form
						</Button>
					</Space>
				</Form.Item>
			</Form>
		</div>
	);
};

export default ValidateForm;
