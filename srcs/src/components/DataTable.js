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
					<Tr>
						<Td>Total top 10 </Td>
						<Td>xxx</Td>
					</Tr>
				</Tbody>
				<Tfoot>
					<Tr>
						<Th>Total</Th>
						<Th>xxx</Th>
					</Tr>
				</Tfoot>
			</Table>
		</TableContainer>
</div>)
}	
