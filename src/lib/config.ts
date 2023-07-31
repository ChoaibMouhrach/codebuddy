import { z } from 'zod'

const schema = z.object({
	SMTP_HOST: z.string().nonempty(),
	SMTP_PORT: z.string().nonempty().regex(/^\d+$/g).transform(Number),
	SMTP_USER: z.string().nonempty(),
	SMTP_PASS: z.string().nonempty(),

	// JWT
	NEXTAUTH_SECRET: z.string().nonempty(),
	GITHUB_ID: z.string().nonempty(),
	GITHUB_SECRET: z.string().nonempty(),
})

const validation = schema.safeParse(process.env)

if (!validation.success) {
	throw new Error(JSON.stringify(validation.error.issues))
}

const config = validation.data

export default config
