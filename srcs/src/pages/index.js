import SignupForm from '@/components/SignupForm'
import { Flex, Box, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
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
    <SignupForm />
    </Box>
    </Flex>
  )
}
