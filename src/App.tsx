import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import AddContact from './pages/AddContact'
import EditContact from './pages/EditContact'
import ViewContact from './pages/ViewContact'

const App = () => {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/add' element={<AddContact />} />
					<Route path='/:id/edit' element={<EditContact />} />
					<Route path='/:id/view' element={<ViewContact />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
