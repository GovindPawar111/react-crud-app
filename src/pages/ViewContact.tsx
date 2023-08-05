import { NavLink } from 'react-router-dom'

const ViewContact = () => {
	return (
		<div className='max-w-screen-xl relative overflow-x-auto container mx-auto'>
			<NavLink to='/'>
				<button className=' text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mx-4 mt-4'>
					Back
				</button>
			</NavLink>

			<div className='w-full flex justify-center'>
				<div className='w-1/2 my-6 '>
					<div className='px-4 sm:px-0'>
						<h3 className='text-2xl font-semibold leading-7 text-gray-900'>Contact Details</h3>
					</div>
					<div className='mt-6 border-t border-gray-400'>
						<dl className='divide-y divide-gray-400'>
							<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
								<dt className='text-sm font-medium leading-6 text-gray-900'>Full name</dt>
								<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
									Mark Lucas
								</dd>
							</div>
							<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
								<dt className='text-sm font-medium leading-6 text-gray-900'>Email address</dt>
								<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
									margotfoster@example.com
								</dd>
							</div>
							<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
								<dt className='text-sm font-medium leading-6 text-gray-900'>Contact Number</dt>
								<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
									74956123235
								</dd>
							</div>
							<div className=' py-6 sm:px-0'>
								<NavLink to='/:1/edit'>
									<button className=' text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-4'>
										Edit
									</button>
								</NavLink>
								<button className=' text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-4'>
									Delete
								</button>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ViewContact
