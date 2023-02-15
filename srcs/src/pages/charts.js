import { getBreached } from "./api/breachedsites.js"
import { generateDataForLineChart } from "@/services/charts.services.js"
import { generateDataForTable } from "@/services/tables.services.js"
import { BreachedSitesLines } from '@/components/BreachedSitesLines'
import  DataTable  from '@/components/DataTable'
import  BoxCharts from '@/components/BoxCharts'
import { Box, Heading } from '@chakra-ui/react'

export default function Charts( { breachedDataSet, dataClassesDataSet} ) {

	return (
		<div>
			<Box textAlign="center">
				<Heading>Charts</Heading>
			</Box>
			<BoxCharts>
				<BreachedSitesLines dataset={breachedDataSet} />
			</BoxCharts>
			<BoxCharts>
				<DataTable dataset={dataClassesDataSet}/>
			</BoxCharts>
		</div>
	)
}


export async function getServerSideProps() {
	const data = await getBreached()
	const breachedDataSet = await generateDataForLineChart(data, "branchyear", "# of breached sites by year")
	
	const dataClassesDataSet = await generateDataForTable()
	return { props: { breachedDataSet , dataClassesDataSet} }
}

