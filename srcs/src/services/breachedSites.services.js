import axios from "axios"
import { getBreached } from "../pages/api/breachedsites.js"

export const parseBreachedJson = async() => {

	const breachedJson = await getBreached()
	let breachedReduced = []
	let breachedSite;
	for (let i = 0; i < 10; i++)
	{
		breachedReduced.push ( { 
			name : breachedJson[i].Name, 
			breachdate: breachedJson[i].BreachDate, 
			pwncount: breachedJson[i].PwnCount
		} )
	}
	return breachedReduced
}

export const getBreachedSites = async() => {

	const breachedSites = await parseBreachedJson()
	return (breachedSites)

}
