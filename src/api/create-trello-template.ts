import { api } from '../lib/axios'

export async function setTrelloTemplate() {
	await api.post('/template')
}
