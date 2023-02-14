import { getBreached } from "./api/breachedsites.js"
import { generateDataForLineChart } from "@/services/charts.services.js"
import { BreachedSitesLines } from '@/components/BreachedSitesLines'

export default function Charts( { breachedDataSet } ) {

	return (
		<div>
			<BreachedSitesLines dataset={breachedDataSet} />
		</div>
	)
}


export async function getServerSideProps() {
	const data = await getBreached()
	const breachedDataSet = await generateDataForLineChart(data, "branchyear", "# of breached sites by year")
	return { props: { breachedDataSet } }
}


