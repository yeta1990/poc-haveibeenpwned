
import axios from "axios"
import { useState, useEffect } from 'react'
import { toSha } from '@/utils/cryptoUtils.js'
import { checkExposedPassword} from '@/services/signupForm.services'
import { Input, Button, InputGroup, Flex, Box, Heading, FormLabel , InputRightElement, Icon } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'

export default function Form() {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [submission, setSubmission] = useState(false);
	const [exposedPass, setExposedPass] = useState(false);
	const [showPass, setShowPass] = useState(false);

	const handlePasswordVisibility = () => setShowPass(!showPass);
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

	useEffect(() => {
		if (exposedPass)
		{
			console.log("exposed pass");
		}
	}, [exposedPass])

	return (
		<div>
		<Flex width="full" align="center" justifyContent="center">
		<Box
        	p={8}
        	maxWidth="500px"
        	borderWidth={1}
        	borderRadius={8}
        	boxShadow="lg"
      	>
			<Box textAlign="center">
              <Heading>Sign up</Heading>
            </Box>
	        <form>
            <Box my={4} textAlign="left">

	            <FormLabel>Email</FormLabel>
	                <Input
	                    type="email"
	                    placeholder="your@email.com"
	                    size="lg"
	                    onChange={e => setEmail(e.target.value)}
	                    value={email}
	                    
                  />
			</Box>

	        <FormLabel>Password</FormLabel>
			<InputGroup>
				<Input
					type={showPass ? 'text' : 'password'}
					placeholder="*******"
    				size="lg"
                    onChange={e => setPass(e.currentTarget.value)}
                 />
				<InputRightElement width="3rem">
				<Button
					h="1.5rem"
					size="sm"
					onClick={handlePasswordVisibility}
                >
				{showPass ? (
					<ViewIcon />
				) : (
					<ViewIcon />
				)}
				</Button>
				</InputRightElement>
			</InputGroup>

			<Button 
				variantcolor="teal"
				variant="outline"
				type="submit"
				width="full"
				mt={4}
				onClick={() => setSubmission(true)}
			>Submit and login </Button>
		</form>
		</Box>
		</Flex>
		</div>
	)
}
