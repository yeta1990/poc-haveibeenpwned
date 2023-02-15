import { Box, Button, Alert, AlertIcon } from '@chakra-ui/react'

export default function AlertBox({ type, text }) {

	return (
		<Box mt={5}>
			<Alert w="100%" status={type}>
				<AlertIcon />{text}
			</Alert>
		</Box>
	)

}
