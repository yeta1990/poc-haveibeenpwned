
import axios from "axios"
import { getBreached } from "./api/breachedsites.js"
import { GetServerSideProps } from 'next'
import { getBreachedSites } from '@/services/breachedSites.services'
import { useState, useEffect } from 'react'

export default function ChartHome( { data } ) {

	return (
		<div>
			{data[0].Name}
			Charts
		</div>
	)
}


export async function getServerSideProps() {
	const data = await getBreached()
	return { props: { data } }
}


