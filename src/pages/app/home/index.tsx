import { getTrelloConfig } from '@/src/api/get-trello-config'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Loading from '../../components/loading'
import { editTrelloConfig } from '@/src/api/edit-trello-config'
import { setTrelloTemplate } from '@/src/api/create-trello-template'
import { useEffect } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@/src/components/ui/label'
import { Input } from '@/src/components/ui/input'
import { Button } from '@/src/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/src/components/ui/card'
import { toast } from 'sonner'
import { Helmet } from 'react-helmet-async'
import { env } from '@/src/env'

const homeSchema = z.object({
	key: z.string().nonempty('O campo [key] não pode ser vazio'),
	token: z.string().nonempty('O campo [token] não pode ser vazio'),
})

type HomeSchema = z.infer<typeof homeSchema>

export function Home() {
	const { data: trelloConfig, isLoading } = useQuery({
		queryKey: ['trello-config'],
		queryFn: getTrelloConfig,
	})

	const {
		mutateAsync: editTrelloConfigFn,
		isPending: editTrelloConfigPending,
	} = useMutation({
		mutationFn: editTrelloConfig,
	})

	const { mutateAsync: setTrelloTemplateFn } = useMutation({
		mutationFn: setTrelloTemplate,
	})

	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
		reset,
	} = useForm<HomeSchema>({
		resolver: zodResolver(homeSchema),
		defaultValues: {
			key: '',
			token: '',
		},
	})

	async function handleFormSubmit(data: HomeSchema) {
		try {
			await editTrelloConfigFn(data)
			toast.success('As informações do Trello foram atualizadas com sucesso!')
		} catch {
			toast.error(
				'Ocorreu um problema ao atualizar as informações do Trello. Por favor, tente novamente.',
			)
		}
	}

	async function handleSetTrelloTemplate() {
		try {
			await setTrelloTemplateFn()
			toast.success('Template do Trello criado com sucesso!')
		} catch {
			toast.error(
				'Não foi possível criar o template do Trello. Por favor, tente novamente.',
			)
		}
	}

	useEffect(() => {
		if (trelloConfig) {
			reset({
				key: trelloConfig.key,
				token: trelloConfig.token,
			})
		}
	}, [trelloConfig, reset])

	return isLoading ? (
		<Loading />
	) : (
		<>
			<Helmet>
				<title>{env.VITE_TITLE} | Home</title>
				<meta name="description" content={env.VITE_DESC} />
			</Helmet>

			<main className="min-h-screen flex items-center justify-center">
				<Card className="min-w-96">
					<CardHeader>
						<CardTitle className="text-2xl">Conecte seu Trello</CardTitle>
					</CardHeader>

					<form onSubmit={handleSubmit(handleFormSubmit)}>
						<CardContent>
							<div className="space-y-4 mb-4">
								<div className="flex flex-col gap-2">
									<Label className="font-semibold text-sm" htmlFor="key">
										Personal Key
									</Label>
									<Input
										data-error={errors.key?.message}
										type="text"
										id="key"
										{...register('key')}
									/>
									<a
										className="text-sm text-blue-600 hover:text-blue-400 self-start"
										target="_blank"
										href="https://trello.com/app-key#:~:text=bf9a49e6c3c4a79d154be59361caf26f"
										rel="noreferrer"
									>
										Onde encontrar minha Key?
									</a>
								</div>

								<div className="flex flex-col gap-2">
									<Label className="font-semibold text-sm" htmlFor="token">
										Token
									</Label>
									<Input
										data-error={errors.token?.message}
										className="border px-4 py-2 rounded border-solid border-zinc-300 outline-none focus:border-zinc-500 transition-all data-[error]:border-red-500"
										type="text"
										id="token"
										{...register('token')}
									/>
									<a
										className="text-sm text-blue-600 hover:text-blue-400 self-start"
										target="_blank"
										href="https://trello.com/1/authorize?expiration=never&scope=read,write,account&response_type=token&name=Server%20Token&key=bf9a49e6c3c4a79d154be59361caf26f"
										rel="noreferrer"
									>
										Onde encontrar meu Token?
									</a>
								</div>
							</div>
						</CardContent>
						<CardFooter>
							<div className="flex flex-col gap-2 w-full">
								<Button
									className="cursor-pointer"
									variant="outline"
									type="submit"
									disabled={isSubmitting}
								>
									Salvar Alterações
								</Button>

								<Button
									className="cursor-pointer"
									variant="default"
									type="button"
									disabled={editTrelloConfigPending}
									onClick={handleSetTrelloTemplate}
								>
									Criar Template
								</Button>
							</div>
						</CardFooter>
					</form>
				</Card>
			</main>
		</>
	)
}
