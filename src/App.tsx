import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

function App() {
	const API_URL = 'https://dashboard.heroku.com/apps/structure-base-backend'
	const [count, setCount] = useState(0)
	const [messages, setMessages] = useState('')

	const fetchData = async () => {
		const response = await axios.get(API_URL)
		console.log(response)
		setMessages(response.data.message)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p> {messages} Vite + React!</p>
				<p>
					<button type='button' onClick={() => setCount(count => count + 1)}>
						count is: {count}
					</button>
				</p>
				<p>
					Edit <code>App.tsx</code> and save to test HMR updates.
				</p>
				<p>
					<a
						className='App-link'
						href='https://reactjs.org'
						target='_blank'
						rel='noopener noreferrer'
					>
						Learn React
					</a>
					{' | '}
					<a
						className='App-link'
						href='https://vitejs.dev/guide/features.html'
						target='_blank'
						rel='noopener noreferrer'
					>
						Vite Docs
					</a>
				</p>
			</header>
		</div>
	)
}

export default App
