const Footer = () => {
	return (
		<footer className="flex items-center justify-between px-8 py-6 mt-10 text-gray-400">
			<div>
				Built with ❤️ by{' '}
				<a
					href="https://github.com/PACY2"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-400 underline hover:text-gray-500"
				>
					PACY2
				</a>{' '}
				&{' '}
				<a
					href="https://github.com/ID-JA"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-400 underline hover:text-gray-500"
				>
					ID-JA
				</a>
			</div>
			<div className="text-gray-400">
				&copy; 2023{' '}
				<a
					href="https://github.com/PACY2/CodeBuddy"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-400 underline hover:text-gray-500"
				>
					CodeBuddy
				</a>
			</div>
		</footer>
	)
}

export default Footer
