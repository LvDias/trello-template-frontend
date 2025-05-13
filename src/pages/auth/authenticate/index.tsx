import { AuthenticateWithLoginEmailClient } from '@/src/api/authenticate-with-login-email-client'
import { useMutation } from '@tanstack/react-query'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Loading from '../../components/loading'
import { useEffect } from 'react'

export function Authenticate() {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()

	const clientId = searchParams.get('clientId')
	const token = searchParams.get('token')

	const { mutateAsync: authenticateWithLoginEmailClientFn } = useMutation({
		mutationFn: AuthenticateWithLoginEmailClient,
	})

	useEffect(() => {
		async function handleAuthenticate() {
			if (clientId && token) {
				const response = await authenticateWithLoginEmailClientFn({
					clientId,
					token,
				})

				localStorage.setItem('auth', response.token)

				navigate('/')
			} else {
				navigate('/sign-in')
			}
		}

		handleAuthenticate()
	}, [clientId, token, navigate, authenticateWithLoginEmailClientFn])

	return <Loading />
}
