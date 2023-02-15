import { Box, TableContainer, Table, Td, Thead, Tr, Th, Tbody, Tfoot} from '@chakra-ui/react'
export default function DataTable( { dataset }) {

	const types = dataset.map((item, i) => 
		<Tr key={i}>
			<Td>{item.name}</Td>
			<Td>{item.times}</Td>
		</Tr>
	)

	return (<div>
		<TableContainer>
			<Table size='sm'>
				<Thead>
					<Tr>
					<Th>To convert</Th>
					<Th>into</Th>
					</Tr>
				</Thead>
				<Tbody>
					{types}
				</Tbody>
			</Table>
		</TableContainer>
</div>)
}	
