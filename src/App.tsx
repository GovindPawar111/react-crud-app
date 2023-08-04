import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddContact from './pages/AddContact'
import EditContact from './pages/EditContact'
import ViewContact from './pages/ViewContact'

import Header from './components/Header'

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/add' element={<AddContact />} />
				<Route path='/:id/edit' element={<EditContact />} />
				<Route path='/:id/view' element={<ViewContact />} />
				<Route path='8' element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
