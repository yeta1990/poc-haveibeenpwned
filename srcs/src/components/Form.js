import axios from "axios"
import { useState, useEffect } from 'react'
import { toSha } from '@/utils/cryptoUtils.js'
import { checkExposedPassword} from '@/services/exposed.services'
import { Input, Button, InputGroup, Flex, Box, Heading, FormLabel , InputRightElement, Icon, Alert, AlertIcon, FormControl, useBoolean, FormErrorMessage } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import { hasEmailValidFormat } from '../utils/stringUtils'
import {useRouter} from 'next/router'

export default function Form() {
	const router = useRouter()
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [submission, setSubmission] = useState(false);
	const [exposedPass, setExposedPass] = useState(false);
	const [showPass, setShowPass] = useBoolean();
	const [emailError, setEmailError] = useState(false);
	const [passError, setPassError] = useState(false);

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
	

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const handlePassChange = (e) => {
		setPass(e.target.value)
	}

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
            <Box my={4} textAlign="left">
			<FormControl isInvalid={emailError}>
	            <FormLabel>Email</FormLabel>
	                <Input
	                    type="text"
	                    placeholder="your@email.com"
	                    size="lg"
	                    onChange={e => handleEmailChange(e)}
	                    value={email}
                  />
                <FormErrorMessage>Please, make sure this is a valid email</FormErrorMessage>
            </FormControl>
			</Box>

	        <FormLabel>Password</FormLabel>
			<InputGroup>
				<FormControl isInvalid={passError}>
				<Input
					type={showPass ? 'text' : 'password'}
					placeholder="*******"
    				size="lg"
                    onChange={e => handlePassChange(e)}
                 />
                <FormErrorMessage>Choose another password, please</FormErrorMessage>
            </FormControl>
				<InputRightElement width="3rem">
				<Button
					h="1.5rem"
					size="sm"
					onClick={setShowPass.toggle}
                >
				{showPass ? (
					<ViewIcon />
				) : (
					<ViewIcon />
				)}
				</Button>
				</InputRightElement>

			</InputGroup>
				{exposedPass && (
				<Box mt={5}>
					<Alert w="100%" status='warning'>
						<AlertIcon />
						We've been noticed that your password has been exposed in X places, so consider trying another one to sign up here.
					</Alert>
				</Box>
				)}
			<Button 
				variantcolor="teal"
				variant="outline"
				width="full"
				type="submit"
				onClick={handleSubmission}
				mt={4}
			>Submit and login </Button>
		</form>
		</Box>
		</Flex>
		</div>
	)	
}
