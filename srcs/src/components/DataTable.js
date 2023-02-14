import { Box, TableContainer, Table, Td, Thead, Tr, Th, Tbody, Tfoot} from '@chakra-ui/react'
export default function DataTable1( { dataset }) {

	const types = dataset.map((item) => 
		
		   <Tr>
	 	    <Td>{item}</Td>
		     <Td>millimetres</Td>
		    </Tr>
		)

	return (<div>
		<Box 
			mt={50}
			ml={10}
			width="600px"
			borderWidth={1}
			rounded="md"
        	boxShadow="dark-lg"
		>
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
	 	       <Td>inches</Td>
		       <Td>millimetres</Td>
		      </Tr>
		    </Tbody>
		    <Tfoot>
		      <Tr>
		        <Th>To convert</Th>
		        <Th>into</Th>
		      </Tr>
		    </Tfoot>
		  </Table>
		</TableContainer>
	</Box>
	</div>)
}	
