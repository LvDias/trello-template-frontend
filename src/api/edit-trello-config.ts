import { api } from '../lib/axios'

export type TrelloConfig = {
	key: string
	token: string
}

export interface EditTrelloConfigBody {
	key: string
	token: string
}

export async function editTrelloConfig({ key, token }: EditTrelloConfigBody) {
	await api.put<TrelloConfig>('/trello', { key, token })
}
