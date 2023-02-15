import { Button, Box, FormLabel, InputGroup, FormControl, Input, FormErrorMessage, InputRightElement, useBoolean } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'

export default function InputPassword({ handlePassChange, pass, passError }){
	const [showPass, setShowPass] = useBoolean();

	return (
		<Box my={4} textAlign="left">
			<FormLabel>Password</FormLabel>
			<InputGroup>
			<FormControl isInvalid={passError}>
				<Input
					type={showPass ? 'text' : 'password'}
					placeholder="*******"
				   	size="lg"
				    onChange={e => handlePassChange(e)}
				    value={pass}
				/>
				<FormErrorMessage>Please, choose another password</FormErrorMessage>
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
		</Box>
	)
}
