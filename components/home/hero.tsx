import styles from './hero.module.css'
const Hero = () => {
	return (
		<div className="mx-auto mb-10 mt-12 px-2.5 text-center sm:px-0 ">
			<div className="mt-5 font-display text-4xl font-semibold leading-[1.15]  text-white sm:text-6xl sm:leading-[1.15]">
				Supercharge your
				<br />
				collaboration with{' '}
				<span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent decoration-primary-400 decoration-dashed">
					CodeBuddy
				</span>
			</div>
			<h2 className="mx-auto mt-5 max-w-2xl text-gray-300 sm:text-xl">
				Empower Your Teamwork with CodeBuddy: Unleash the Collaborative Force!
			</h2>
			<div className="mx-auto mt-10 flex max-w-fit space-x-4">
				<a
					href="https://tally.so/r/nP1dpB"
					target="_blank"
					rel="noopener noreferrer"
					className={styles['early-access']}
				>
					Get Early Access
					<div className={styles['button-border']}></div>
				</a>
			</div>
		</div>
	)
}

export default Hero
