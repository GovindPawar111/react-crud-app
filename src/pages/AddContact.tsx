import { NavLink } from 'react-router-dom'

const AddContact = () => {
	return (
		<div className='max-w-screen-xl relative overflow-x-auto container mx-auto'>
			<NavLink to='/'>
				<button className=' text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mx-4 mt-4'>
					Back
				</button>
			</NavLink>
		</div>
	)
}

export default AddContact
