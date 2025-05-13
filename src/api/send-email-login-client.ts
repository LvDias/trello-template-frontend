import { api } from '../lib/axios'

export type SendEmailLoginClientSchema = {
	email: string
}

export async function SendEmailLoginClient({
	email,
}: SendEmailLoginClientSchema) {
	return api.post('/magic-link', { email })
}
