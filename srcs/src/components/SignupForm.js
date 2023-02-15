import axios from "axios"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { toSha } from '@/utils/cryptoUtils.js'
import { checkExposedPassword} from '@/services/exposed.services'
import { hasEmailValidFormat } from '../utils/stringUtils'

import SubmissionButton from '@/components/SubmissionButton'
import InputEmail from '@/components/InputEmail'
import InputPassword from '@/components/InputPassword'
import AlertBox from '@/components/AlertBox'

export default function SignupForm() {
	const router = useRouter()
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [submission, setSubmission] = useState(false);
	const [exposedPass, setExposedPass] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [passError, setPassError] = useState(false);

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const handlePassChange = (e) => {
		setPass(e.target.value)
	}

	const handleSubmission = async (e) => {
		e.preventDefault();

		if (email === '' || !hasEmailValidFormat(email))
		{	
			setEmailError(true)
		}
		else
		{
			setEmailError(false)
		}

		const isPassExposed = await checkExposedPassword(pass);
		setExposedPass(isPassExposed)
		if (pass.length > 0 && !isPassExposed)
		{
			setPassError(false)
		}
		else
		{
			setPassError(true)
		}

		setSubmission(true)
		
	}

	useEffect(() =>{
		
		if (!emailError && !passError && submission)
		{
			router.push('/charts')
		}
		() => {setSubmission(false)}
		
	}, [emailError, passError, submission])


	return (
		<form>
			<InputEmail 
				handleEmailChange={handleEmailChange}
				email={email}
				emailError={emailError}
			/>
			<InputPassword 
				handlePassChange={handlePassChange} 
				pass={pass}
				passError={passError} 
			/>
			{exposedPass && (
				<AlertBox 
					type="warning" 
					text="We\'ve been noticed that your password has been exposed in X places, so consider trying another one to sign up here." />
			)}
			<SubmissionButton 
				submissionHandler={handleSubmission} 
				text="Submit and login" 
			/>
		</form>
	)	
}
