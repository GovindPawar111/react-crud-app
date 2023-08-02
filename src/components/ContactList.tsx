const ContactList = () => {
	return (
		<div className='relative overflow-x-auto mt-8 container mx-auto'>
			<table className='w-full text-sm text-left text-gray-500'>
				<thead className='text-xs text-gray-700 bg-gray-50'>
					<tr className=' border-b border-neutral-500 text-lg font-bold'>
						<th scope='col' className='px-6 py-3'>
							Name
						</th>
						<th scope='col' className='px-6 py-3'>
							Email
						</th>
						<th scope='col' className='px-6 py-3'>
							Number
						</th>
						<th scope='col' className='px-6 py-3'>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className='bg-white border-b border-neutral-500 text-base'>
						<td className='whitespace-nowrap px-6 py-4'>
							Mark lucas
						</td>
						<td className='whitespace-nowrap px-6 py-4'>
							Mark@mail.com
						</td>
						<td className='whitespace-nowrap px-6 py-4'>
							7894561230
						</td>
						<td className='whitespace-nowrap px-6'>
							<a
								href='#'
								className='font-medium text-blue-600  hover:underline mr-6 '
							>
								Edit
							</a>
							<a
								href='#'
								className='font-medium text-red-600  hover:underline mr-6 '
							>
								Delete
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default ContactList
