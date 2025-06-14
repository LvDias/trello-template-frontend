import z from 'zod'

export const envSchema = z.object({
	MODE: z.enum(['production', 'development', 'test']),
	VITE_TITLE: z.string(),
	VITE_DESC: z.string(),
	VITE_API_URL: z.string().url(),
	VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)
