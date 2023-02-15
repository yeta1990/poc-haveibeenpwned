import { Box, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'

export default function InputEmail( { handleEmailChange, email, emailError} )
{
	return (
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
	)

}
