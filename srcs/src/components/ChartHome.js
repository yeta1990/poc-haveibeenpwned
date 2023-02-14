
import axios from "axios"
import { getBreachedSites } from '@/services/breachedSites.services'
import { useState, useEffect } from 'react'
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { Box } from '@chakra-ui/react'

const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    }


export function ChartHome() {
	return (
		<div>
			<Box >
		<Line
			data={data}
			width={300}
			height={300}
			options={{
				maintainAspectRatio: false,
				responsive: true,
			}}
		/>	
		</Box>
			
		</div>
	)
}


