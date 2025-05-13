import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import { Toaster } from './components/ui/sonner'

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={routes} />
			<Toaster />
		</QueryClientProvider>
	)
}
