
import axios from "axios"
import { getBreached } from "./api/breachedsites.js"
import { GetServerSideProps } from 'next'
import { getBreachedSites } from '@/services/breachedSites.services'
import { useState, useEffect } from 'react'
import { ChartHome } from '@/components/ChartHome'
export default function Charts( { data } ) {

	return (
		<div>
			{data[0].Name}
			Charts
			<ChartHome />
		</div>
	)
}


export async function getServerSideProps() {
	const data = await getBreached()
	return { props: { data } }
}


