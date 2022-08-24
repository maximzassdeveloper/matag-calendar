import { FC } from 'react'
import { Alert, Button, Form, Input, Typography } from 'antd'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { getUser } from '@/store/selectors'
import s from './auth.module.less'

interface AuthFormProps {
	title: string
	onSubmit: (fields: any) => void
}

export const AuthForm: FC<AuthFormProps> = ({ title, onSubmit }) => {
	const [form] = Form.useForm()
	const { isLoading, error } = useTypedSelector(getUser)

	const onFinish = (fields: any) => {
		onSubmit(fields)
	}

	return (
		<div className={s.form}>
			<Typography.Title className={s.title} level={2}>
				{title}
			</Typography.Title>
			<Form
				form={form}
				name="register"
				layout="vertical"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				autoComplete="off"
			>
				<Form.Item
					label="Username"
					name="username"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input size="large" />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password size="large" />
				</Form.Item>

				<Form.Item className={s.button}>
					<Button
						loading={isLoading}
						type="primary"
						htmlType="submit"
						size="large"
					>
						Submit
					</Button>
				</Form.Item>
				{error && <Alert message={error} type="error" showIcon closable />}
			</Form>
		</div>
	)
}
