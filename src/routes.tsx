import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/app/home'
import { SignIn } from './pages/auth/sign-in'
import { AppLayout } from './pages/_layouts/app/layout'
import { AuthLayout } from './pages/_layouts/auth/layout'
import { Authenticate } from './pages/auth/authenticate'

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [{ path: '/', element: <Home /> }],
	},
	{
		path: '/',
		element: <AuthLayout />,
		children: [
			{ path: '/sign-in', element: <SignIn /> },
			{ path: '/authenticate', element: <Authenticate /> },
		],
	},
])
