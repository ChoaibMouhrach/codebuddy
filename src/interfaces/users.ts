import { User as IUser, Role, Subscription } from '@prisma/client'

export type User = IUser & {
	subscription: Subscription
	role: Role
}
