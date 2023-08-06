import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddContact from './pages/AddContact'
import EditContact from './pages/EditContact'
import ViewContact from './pages/ViewContact'

import Header from './components/Header'
import About from './pages/About'

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/add' element={<AddContact />} />
				<Route path='/:id/edit' element={<EditContact />} />
				<Route path='/:id/view' element={<ViewContact />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
