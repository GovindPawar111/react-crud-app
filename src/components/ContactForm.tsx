const ContactForm = () => {
	return (
		<form
			className='w-full flex justify-center'
			onSubmit={() => {
				console.log('form submitted')
			}}
		>
			<div className='w-1/2 my-6 '>
				<div>
					<label htmlFor='name' className='block text-sm font-medium leading-6 text-gray-900'>
						Name
					</label>
					<div className='mt-2'>
						<input
							id='name'
							name='name'
							type='text'
							autoComplete='name'
							required
							className='block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
						/>
					</div>
				</div>
				<div>
					<label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
						Email address
					</label>
					<div className='mt-2'>
						<input
							id='email'
							name='email'
							type='email'
							autoComplete='email'
							required
							className='block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
						/>
					</div>
				</div>
				<div>
					<label htmlFor='number' className='block text-sm font-medium leading-6 text-gray-900'>
						Number
					</label>
					<div className='mt-2'>
						<input
							id='number'
							name='number'
							type='number'
							autoComplete='number'
							required
							className='block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
						/>
					</div>
				</div>

				<button
					type='submit'
					className='px-3 py-2 my-6 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5'
				>
					Save
				</button>
			</div>
		</form>
	)
}

export default ContactForm
