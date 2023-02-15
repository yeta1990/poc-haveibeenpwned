import { getBreached } from "@/services/breachedSites.services"
import { getBreachedDataTypeTop } from "@/services/breachedtypes.services.js"
import { generateDataForLineChart } from "@/services/charts.services.js"
import { BreachedSitesLines } from '@/components/BreachedSitesLines'
import  DataTable  from '@/components/DataTable'
import  BoxCharts from '@/components/BoxCharts'
import { Box, Heading, Flex, Link, Wrap, WrapItem } from '@chakra-ui/react'

export default function Charts( { breachedDataSet, dataClassesDataSet} ) {

	return (
		<div>
			<Box textAlign="center" mt={20}>
				<Heading>Charts</Heading>
			</Box>
			<Wrap spacing='30px' justify='center'>
				<WrapItem>
					<BoxCharts>
						<Box m={6}>
							<Heading size='md' >
							Number of breached sites
							</Heading>
							<Box mt={2} mb={2}>
								Year by year, reported by <Link href='https://haveibeenpwned.com/' isExternal>haveibeenpwned</Link>
							</Box>
						<Box mt={10}>
							<BreachedSitesLines dataset={breachedDataSet} />
						</Box>
						</Box>
					</BoxCharts>
				</WrapItem>
				<WrapItem>
					<BoxCharts>
						<Box mt={6} ml={12}>
							<Heading size='md' >
								Top 10 type of data leaked from breached sites
							</Heading>
							<Box mt={2} mb={2}>
								Total since 2007, reported by <Link href='https://haveibeenpwned.com/' isExternal>haveibeenpwned</Link>
							</Box>
						</Box>
						<Box m={6}>
							<DataTable dataset={dataClassesDataSet}/>
						</Box>
					</BoxCharts>
				</WrapItem>
			</Wrap>
		</div>
	)
}


export async function getServerSideProps() {
	const data = await getBreached()
	const breachedDataSet = await generateDataForLineChart(data, "branchyear", "# of breached sites by year")

	const dataClassesDataSet = await getBreachedDataTypeTop(10)
	return { props: { breachedDataSet , dataClassesDataSet} }
}

