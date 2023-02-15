import { getBreached } from "./api/breachedsites.js"
import { generateDataForLineChart } from "@/services/charts.services.js"
import { generateDataForTable } from "@/services/tables.services.js"
import { BreachedSitesLines } from '@/components/BreachedSitesLines'
import  DataTable1  from '@/components/DataTable'
import { Box, Heading } from '@chakra-ui/react'

export default function Charts( { breachedDataSet, dataClassesDataSet} ) {

	return (
		<div>
			<Box textAlign="center">
				<Heading>Charts</Heading>
			</Box>
			<BreachedSitesLines dataset={breachedDataSet} />
			<DataTable1 dataset={dataClassesDataSet}/>
		</div>
	)
}


export async function getServerSideProps() {
	const data = await getBreached()
	const breachedDataSet = await generateDataForLineChart(data, "branchyear", "# of breached sites by year")
//	const dataCDS = await fetch(`https://haveibeenpwned.com/api/v3/dataclasses`)
//	const dataClassesDataSet = await dataCDS.json()
//	console.log(dataClassesDataSet)
	
	const dataClassesDataSet = await generateDataForTable()
	return { props: { breachedDataSet , dataClassesDataSet} }
}

