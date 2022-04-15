import './style.css'
import signin from '../../signin.svg'
import signup from '../../signup.svg'
import { useState } from 'react'

const Login = () => {
	const [mode, setMode] = useState('')

	const handlerSignUp = () => {
		setMode('sign-up-mode')
	}

	const handlerSignIn = () => {
		setMode('')
	}
	return (
		<>
			<div className={`${mode} container`}>
				<div className='forms-container'>
					<div className='signin-signup'>
						<form action='#' className='sign-in-form'>
							<h2 className='title'>Sign in</h2>
							<div className='input-field'>
								<i className='fas fa-user'></i>
								<input type='email' placeholder='Username' />
							</div>
							<div className='input-field'>
								<i className='fas fa-lock'></i>
								<input type='password' placeholder='Password' />
							</div>
							<input type='submit' value='Login' className='btn solid' />
						</form>
						<form action='#' className='sign-up-form'>
							<h2 className='title'>Sign up</h2>
							<div className='input-field'>
								<i className='fas fa-user'></i>
								<input type='text' placeholder='Name' />
							</div>
							<div className='input-field'>
								<i className='fas fa-envelope'></i>
								<input type='email' placeholder='Email' />
							</div>
							<div className='input-field'>
								<i className='fas fa-lock'></i>
								<input type='password' placeholder='Password' />
							</div>
							<input type='submit' className='btn' value='Sign up' />
						</form>
					</div>
				</div>

				<div className='panels-container'>
					<div className='panel left-panel'>
						<div className='content'>
							<h3>New here ?</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione.
								Aliquid!
							</p>
							<button className='btn transparent' id='sign-up-btn' onClick={handlerSignUp}>
								Sign up
							</button>
						</div>
						<img src={signup} className='image' alt='' />
					</div>
					<div className='panel right-panel'>
						<div className='content'>
							<h3>One of us ?</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad
								deleniti.
							</p>
							<button className='btn transparent' id='sign-in-btn' onClick={handlerSignIn}>
								Sign in
							</button>
						</div>
						<img src={signin} className='image' alt='' />
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
