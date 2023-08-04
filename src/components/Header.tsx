import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div className='w-full px-8 flex justify-between content-center py-4 shadow-lg'>
			<Link to='/' className='text-3xl font-bold my-4 '>
				<h1>Welcome to Contact Manager</h1>
			</Link>
			<div className='sm:flex justify-between content-center hidden '>
				<Link to='/' className='text-lg font-medium  '>
					<h2 className='hover:underline mr-6 my-4 '>Home</h2>
				</Link>
				<Link to='/' className='text-lg font-medium  '>
					<h2 className='hover:underline mr-6 my-4 '>About</h2>
				</Link>
			</div>
		</div>
	)
}

export default Header
