import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

const main = async () => {
	// default roles
	const roles = db.role.createMany({
		data: ['member', 'admin'].map(name => ({ name })),
	})

	const freeFeatures = ['5GB Storage', '1 WorkSpace', '1 App']
	const premiumFeatures = ['10GB Storage', '5 WorkSpace', '5 App']
	const payAsYouGoFeatures = [
		'Unlimited Storage',
		'Unlimited WorkSpace',
		'Unlimited App',
	]

	const freeSubscription = db.subscription.create({
		data: {
			name: 'free',
			price: 0,
			features: {
				connectOrCreate: freeFeatures.map(name => ({
					where: {
						name,
					},
					create: {
						name,
					},
				})),
			},
		},
	})

	const premiumSubscription = db.subscription.create({
		data: {
			name: 'premium',
			price: 0,
			features: {
				connectOrCreate: premiumFeatures.map(name => ({
					where: {
						name,
					},
					create: {
						name,
					},
				})),
			},
		},
	})

	const payAsYouGoSubscription = db.subscription.create({
		data: {
			name: 'pay as you go',
			price: 0,
			features: {
				connectOrCreate: payAsYouGoFeatures.map(name => ({
					where: {
						name,
					},
					create: {
						name,
					},
				})),
			},
		},
	})

	await Promise.all([
		roles,
		freeSubscription,
		premiumSubscription,
		payAsYouGoSubscription,
	])
}

main()
