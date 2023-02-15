import { Box } from '@chakra-ui/react'

export default function BoxCharts (props)
{
	return (
		<Box 
			mt={50}
			width={[400,600]}
			height="600px"
			borderWidth={1}
			rounded="md"
        	boxShadow="dark-lg"
		>
			{props.children}
		</Box>
	)
}
