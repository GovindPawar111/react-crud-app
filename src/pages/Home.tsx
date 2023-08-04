import { NavLink } from 'react-router-dom'
import ContactList from '../components/ContactList'

const Home = () => {
	return (
		<div className='max-w-screen-xl relative overflow-x-auto container mx-auto'>
			<NavLink to='/add'>
				<button className=' text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mx-4 mt-4'>
					Add New Contact
				</button>
			</NavLink>
			<ContactList />
		</div>
	)
}

export default Home
