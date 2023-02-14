
import axios from "axios"
import { getBreachedSites } from '@/services/breachedSites.services'
import { useState, useEffect } from 'react'

export function ChartHome() {
	/*const [data, setData] = useState()

	useEffect(() =>{
		const datafetch = async () => { 
			await getBreachedSites()
				.then((d) => setData(d))
				.then(setLoading(false))
//			setData(dataset)
			console.log(data)
//			console.log(dataset[10].name)
		}
		datafetch()
	}, [])
 	
 	if (loading)
 	{
 		return (<></>)
 	}
	*/ 
	return (
		<div>
			Charts
		</div>
	)
}


/*
export async function getServerSideProps() {
	const res = await getBreachedSites()
//	const res = await axios.get(`/api/breachedsites`)
//	const data = await res.json()
	return { props: { res } }
}

*/

