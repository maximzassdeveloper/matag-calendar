import { FC } from 'react'
import { AuthRefreshComponent, AppProvider } from '@/components/AppProvider'

const App: FC = () => {
	return (
		<AppProvider>
			<AuthRefreshComponent />
		</AppProvider>
	)
}

export default App
