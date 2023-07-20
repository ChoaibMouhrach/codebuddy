import styles from "./hero.module.css"
const Hero = () => {
	return (
		<div className="mx-auto mb-10 mt-12 px-2.5 text-center sm:px-0 ">
			{/* <img src="./_static/vector-1.svg" className="absolute top-0 w-[500px] translate-x-1/2"/> */}
			<h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.15]  text-white sm:text-6xl sm:leading-[1.15]">
				Supercharge your
				<br />
				collaboration with{' '}
				<span className="text-transparent underline bg-gradient-to-r from-primary-500 via-indigo-500 to-purple-500 bg-clip-text decoration-primary-400 decoration-dashed">
					CodeBuddy
				</span>
			</h1>
			<h2 className="max-w-2xl mx-auto mt-5 text-gray-300 sm:text-xl">
				Break the Barriers of Teamwork: Elevate Collaboration with Effortless
				Link, Image, and Code Sharing through CodeBuddy.
			</h2>
			<div className="flex mx-auto mt-10 space-x-4 max-w-fit">
				<button
					type="button"
					className={styles["early-access"]}
				>
				Get Early Access
				<div className={styles["button-border"]}></div>
				</button>
				{/* <div className="relative inline-flex group">
					<div className="absolute duration-1000 transitiona-all animate-tilt -inset-px rounded-xl bg-gradient-to-r from-primary-500 via-purple-500 to-indigo-500 opacity-70 blur-lg group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
					<button
						type="button"
						className=" relative  rounded-lg bg-primary-700 px-6 py-3.5 text-center text-base font-medium text-white transition-all  duration-200 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
					>
						Get Early Access
					</button>
				</div> */}
			</div>
		</div>
	)
}

export default Hero
