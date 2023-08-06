import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { contacts } from '../components/ContactList'
import Loader from '../components/Loader'

const ViewContact = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [loading, setLoading] = useState<boolean>(false)
	const [contact, setContact] = useState<contacts>({
		id: '',
		name: '',
		email: '',
		phone: '',
	})

	const handleContactDelete = (id: string) => {
		axios
			.delete(`http://localhost:8000/contacts/${id}`)
			.then(res => {
				console.log(res.status)
				navigate('/')
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		setLoading(true)
		if (id) {
			axios
				.get(`http://localhost:8000/contacts/${id}`)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.then((res: any) => {
					const contact = {
						id: res.data.id,
						name: res.data.name,
						email: res.data.email,
						phone: res.data.phone,
					}
					setContact(contact)
					console.log(contact)
					setLoading(false)
				})
				.catch(error => {
					console.log(error)
					setLoading(false)
				})
		}
	}, [])

	if (loading) {
		return <Loader />
	}

	return (
		<div className='max-w-screen-xl container mx-auto'>
			<NavLink to='/'>
				<button className=' text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mx-4 mt-4'>
					Back
				</button>
			</NavLink>

			<div className='w-full flex justify-center'>
				<div className='w-1/2 my-6 '>
					<div className='px-4 sm:px-0'>
						<h3 className='text-2xl font-semibold leading-7 text-gray-900'>
							Contact Details
						</h3>
					</div>
					<div className='mt-6 border-t border-gray-400'>
						<dl className='divide-y divide-gray-400'>
							<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
								<dt className='text-sm font-medium leading-6 text-gray-900'>
									Full name
								</dt>
								<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
									{contact.name}
								</dd>
							</div>
							<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
								<dt className='text-sm font-medium leading-6 text-gray-900'>
									Email address
								</dt>
								<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
									{contact.email}
								</dd>
							</div>
							<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
								<dt className='text-sm font-medium leading-6 text-gray-900'>
									Contact Number
								</dt>
								<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
									{contact.phone}
								</dd>
							</div>
							<div className=' py-6 sm:px-0'>
								<NavLink to={`/${contact.id}/edit`}>
									<button className=' text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-4'>
										Edit
									</button>
								</NavLink>
								<a
									onClick={() =>
										handleContactDelete(contact.id)
									}
									className=' text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-4'
								>
									Delete
								</a>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ViewContact
