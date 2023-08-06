import { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { contacts } from '../components/ContactList'
import Loader from '../components/Loader'

const EditContact = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [loading, setLoading] = useState<boolean>(false)
	const [contact, setContact] = useState<contacts>({
		id: '',
		name: '',
		email: '',
		phone: '',
	})

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	): void => {
		setContact((prevState) => {
			return {
				...prevState,
				[e.target.name]: e.target.value,
			}
		})
	}

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		axios
			.put(`https://jsonplaceholder.typicode.com/users/${id}`, contact)
			.then((res) => {
				console.log(res.status)
				navigate('/')
			})
			.catch((err) => console.log(err))
		console.log(contact)
	}

	useEffect(() => {
		setLoading(true)
		axios
			.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => {
				const contact: contacts = {
					id: res.data.id,
					name: res.data.name,
					email: res.data.email,
					phone: res.data.phone,
				}

				setContact(contact)
				console.log(contact)
				setLoading(false)
			})
			.catch((error) => {
				console.log(error)
				setLoading(false)
			})
	}, [])

	if (loading) {
		return <Loader />
	}

	return (
		<div className='max-w-screen-xl relative overflow-x-auto container mx-auto'>
			<NavLink to='/'>
				<button className=' text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mx-4 mt-4'>
					Back
				</button>
			</NavLink>
			<form
				className='w-full flex justify-center'
				onSubmit={(e) => {
					handleFormSubmit(e)
				}}
			>
				<div className='w-1/2 my-6 '>
					<div>
						<label
							htmlFor='name'
							className='block text-sm font-medium leading-6 text-gray-900'
						>
							Name
						</label>
						<div className='mt-2'>
							<input
								id='name'
								value={contact.name}
								onChange={handleInputChange}
								name='name'
								type='text'
								autoComplete='name'
								required
								className='block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium leading-6 text-gray-900'
						>
							Email address
						</label>
						<div className='mt-2'>
							<input
								id='email'
								value={contact.email}
								onChange={handleInputChange}
								name='email'
								type='email'
								autoComplete='email'
								required
								className='block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor='phone'
							className='block text-sm font-medium leading-6 text-gray-900'
						>
							Number
						</label>
						<div className='mt-2'>
							<input
								id='phone'
								value={contact.phone}
								onChange={handleInputChange}
								name='phone'
								type='phone'
								autoComplete='phone'
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
		</div>
	)
}

export default EditContact
