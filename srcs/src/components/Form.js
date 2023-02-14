
import axios from "axios"
import { useState, useEffect } from 'react'
import { toSha } from '@/utils/cryptoUtils.js'
import { checkExposedPassword} from '@/services/signupForm.services'
import { Input, Button, InputGroup, Flex, Box, Heading, FormLabel , InputRightElement, Icon, Alert, AlertIcon, FormControl, useBoolean, FormErrorMessage } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import { hasEmailValidFormat } from '../utils/stringUtils'

export default function Form() {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [submission, setSubmission] = useState(false);
	const [exposedPass, setExposedPass] = useState(false);
	const [showPass, setShowPass] = useBoolean();
	const [emailError, setEmailError] = useState(false);
	const [passError, setPassError] = useState(false);

	const handleSubmission = (e) => {
		e.preventDefault()
		email === '' && setEmailError(true)
		!hasEmailValidFormat(email) && setEmailError(true)
		pass === '' && setPassError(true)
		setSubmission(true)
	}

	const handleEmailChange = (e) => {
		if (!emailError)
			setEmailError(false)
		setEmail(e.target.value)
	}

	const handlePassChange = (e) => {
		if (!emailError)
			setPassError(false)
		setPass(e.target.value)
	}

	useEffect(() => {
		if (submission)
		{
			async function getData() {
				const a = await checkExposedPassword(pass, setExposedPass);
				console.log(a);
			}
			getData()
			setSubmission(false);
		}
	}, [submission])

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
			<FormControl isRequired isInvalid={emailError}>
	            <FormLabel>Email</FormLabel>
	                <Input
	                    type="email"
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
				<FormControl isRequired isInvalid={passError}>
				<Input
					type={showPass ? 'text' : 'password'}
					placeholder="*******"
    				size="lg"
                    onChange={e => handlePassChange(e)}
                 />
                <FormErrorMessage>This field can't be empty</FormErrorMessage>
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
				type="submit"
				width="full"
				mt={4}
				onClick={handleSubmission}

			>Submit and login </Button>
		</form>
		</Box>
		</Flex>
		</div>
	)
}
