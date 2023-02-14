import axios from "axios"
import { useState, useEffect } from 'react'
import { Chart } from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { Box, Heading } from '@chakra-ui/react'

export function BreachedSitesLines({ dataset }) {
	return (
		<div>
		<Box textAlign="center">
			<Heading>Charts</Heading>
		</Box>
		<Box 
			mt={50}
			ml={10}
			width="600px"
			borderWidth={1}
			rounded="md"
        	boxShadow="dark-lg"
		>
		<Line
			data={dataset}
			width={300}
			height={300}
			options={{
				maintainAspectRatio: false,
				responsive: true,
				scales: {
			      x: {
			        grid: {
			          color: '#747474',
			          borderColor: 'grey',
			          tickColor: 'grey'
			        }
			      },
			      y: {
			        grid: {
			          color: '#747474',
			          borderColor: 'grey',
			          tickColor: 'grey'
			        }
			      }
			    }
			}}
		/>	
		</Box>
			
		</div>
	)
}


