import { api } from '../lib/axios'

export type AuthenticateWithLoginEmailClientScheme = {
	clientId: string
	token: string
}

export type AuthenticateBody = {
	token: string
}

export async function AuthenticateWithLoginEmailClient({
	clientId,
	token,
}: AuthenticateWithLoginEmailClientScheme) {
	const response = await api.post<AuthenticateBody>('/authenticate', {
		clientId,
		token,
	})

	return response.data
}
