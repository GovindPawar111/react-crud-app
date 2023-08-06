const About = () => {
	return (
		<div className='w-full h-full container mx-auto '>
			<div className='flex justify-center'>
				<div className='w-3/4 '>
					<h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 '>
						Simple React project with CRUD functionality.
					</h1>
					<p className='mt-6 text-lg leading-8 text-gray-700'>
						To start the Project locally you have to run the command
						<strong className='font-bold text-gray-900'> npm run dev</strong>. which will start the
						project on localhost.
					</p>
					<p className='mt-6 text-lg leading-8 text-gray-700'>
						It used JSON server as backend to start the server you have to run the command npm run serve
						<strong className='font-bold text-gray-900'> npm run serve</strong>.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
