import { FC } from 'react'
import { AntdProvider } from './AntdProvider'
import { ReduxProvider } from './ReduxProvider'
import { AuthComponent } from './AuthComponent'

export const AppProvider: FC = () => {
	return (
		<ReduxProvider>
			<AntdProvider>
				<AuthComponent />
			</AntdProvider>
		</ReduxProvider>
	)
}