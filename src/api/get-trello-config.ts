import { api } from '../lib/axios'

export type TrelloConfig = {
	key?: string
	token?: string
}

export async function getTrelloConfig() {
	const response = await api.get<TrelloConfig>('/trello')

	return response.data
}
