
import { useState, useEffect } from 'react'

export function ChartHome({ data }) {

	return (
		<div>
			Charts
		</div>

	)

}


export async function getServerSideProps() {
	return { props: { data } }
}

