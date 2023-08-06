import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Loader from './Loader'

export interface contacts {
	id: string
	name: string
	email: string
	phone: string
}

const ContactList = () => {
	const [contacts, setContacts] = useState<contacts[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	const handleContactDelete = (id: string) => {
		axios
			.delete(`http://localhost:8000/contacts/${id}`)
			.then(res => {
				console.log(res.status)
				getContactList()
			})
			.catch(err => console.log(err))
	}

	const getContactList = (): void => {
		axios
			.get('http://localhost:8000/contacts')
			.then(res => {
				const contactList: contacts[] = []
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				res.data.map((r: any) => {
					contactList.push({
						id: r.id,
						name: r.name,
						email: r.email,
						phone: r.phone,
					})
				})
				setContacts(contactList)
				console.log(contactList)
				setLoading(false)
			})
			.catch(error => {
				console.log(error)
				setLoading(false)
			})
	}

	useEffect(() => {
		setLoading(true)
		getContactList()
	}, [])

	if (loading) {
		return <Loader />
	}

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
					{contacts.map(contact => {
						return (
							<tr className='bg-white border-b border-neutral-500 text-base' key={contact.id}>
								<td className='whitespace-nowrap px-6 py-4'>{contact.name}</td>
								<td className='whitespace-nowrap px-6 py-4'>{contact.email}</td>
								<td className='whitespace-nowrap px-6 py-4'>{contact.phone}</td>
								<td className='whitespace-nowrap px-6'>
									<NavLink
										to={`/${contact.id}/view`}
										className='font-medium text-blue-600  hover:underline mr-6 '
									>
										Details
									</NavLink>
									<NavLink
										to={`/${contact.id}/edit`}
										className='font-medium text-blue-600  hover:underline mr-6 '
									>
										Edit
									</NavLink>
									<a
										onClick={() => handleContactDelete(contact.id)}
										className='font-medium text-red-600  hover:underline mr-6 '
									>
										Delete
									</a>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default ContactList
