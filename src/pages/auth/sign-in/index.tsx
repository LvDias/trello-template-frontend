import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { SendEmailLoginClient } from '@/src/api/send-email-login-client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/src/components/ui/input'
import { Button } from '@/src/components/ui/button'
import { Label } from '@/src/components/ui/label'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/src/components/ui/card'
import { toast } from 'sonner'

const signInSchema = z.object({
	email: z.string().email(),
})

export type SignInSchema = z.infer<typeof signInSchema>

export function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
		reset,
	} = useForm<SignInSchema>({
		resolver: zodResolver(signInSchema),
	})

	const { mutateAsync: sendEmailToClient } = useMutation({
		mutationFn: SendEmailLoginClient,
	})

	async function handleSubmitForm(data: SignInSchema) {
		try {
			await sendEmailToClient(data)
			reset()
			toast.success(
				'Link de acesso enviado! Verifique sua caixa de entrada e siga as instruções para continuar.',
			)
		} catch {
			toast.error('Para acessar a ferramenta, é necessário adquirir o curso.', {
				action: {
					label: 'Link',
					onClick: () => window.open('https://google.com', '_blank'),
				},
			})
		}
	}

	return (
		<main className="min-h-screen flex items-center justify-center">
			<Card className="min-w-96">
				<CardHeader>
					<CardTitle className="text-2xl">Acesse sua conta</CardTitle>
				</CardHeader>
				<form onSubmit={handleSubmit(handleSubmitForm)}>
					<CardContent>
						<div className="flex flex-col gap-2 mb-4">
							<Label htmlFor="email">E-mail</Label>
							<Input
								data-error={errors.email}
								type="email"
								id="email"
								{...register('email')}
							/>
							<p className="text-sm text-zinc-400">
								Você receberá um link por e-mail para acessar sua conta.
							</p>
						</div>
					</CardContent>
					<CardFooter>
						<Button
							className="w-full cursor-pointer"
							variant="default"
							type="submit"
							disabled={isSubmitting}
						>
							Enviar Link de Acesso
						</Button>
					</CardFooter>
				</form>
			</Card>
		</main>
	)
}
