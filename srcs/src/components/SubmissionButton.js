import { Button } from '@chakra-ui/react'

export default function SubmissionButton({ submissionHandler, text }) {
	
	return (
		<Button 
			variantcolor="teal"
			variant="outline"
			width="full"
			type="submit"
				onClick={submissionHandler}
			mt={4}
			>{text}</Button>
	)
}
