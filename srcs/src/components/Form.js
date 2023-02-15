import axios from "axios"
import { useState, useEffect } from 'react'
import { toSha } from '@/utils/cryptoUtils.js'
import { checkExposedPassword} from '@/services/exposed.services'
import SubmissionButton from '@/components/SubmissionButton'
import InputEmail from '@/components/InputEmail'
import InputPassword from '@/components/InputPassword'
import AlertBox from '@/components/AlertBox'
import { Input, Button, InputGroup, Flex, Box, Heading, FormLabel , FormControl, FormErrorMessage } from '@chakra-ui/react'
import { hasEmailValidFormat } from '../utils/stringUtils'
import {useRouter} from 'next/router'

export default function Form() {
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
		<div>
		<Flex width="full" align="center" justifyContent="center">
		<Box
        	p={8}
        	mt={50}
        	width="400px"
        	borderWidth={1}
        	rounded="md"
        	boxShadow="dark-lg"
      	>
			<Box textAlign="center">
				<Heading>Sign up</Heading>
			</Box>
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
		</Box>
		</Flex>
		</div>
	)	
}
