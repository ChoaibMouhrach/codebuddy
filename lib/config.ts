import { z } from 'zod'

const schema = z.object({
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
