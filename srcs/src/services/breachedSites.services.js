import axios from "axios"

//takes all data from haveibeenpwned and reduces the payload to serve the internal charts and the api in /api/breachedsites

export async function getBreached() {
	const result = await fetch('https://haveibeenpwned.com/api/v3/breaches');
	const data = await result.json()
	const reducedData = await reduceBreachedResults(data)
	return reducedData
}

export async function reduceBreachedResults(data)
{
	let breachedReduced = []
	for (let i = 0; i < data.length; i++)
	{
		breachedReduced.push ( { 
			name : data[i].Name, 
			breachdate: data[i].BreachDate, 
			pwncount: data[i].PwnCount,
			breachyear: data[i].BreachDate.substr(0,4),
			dataclasses: data[i].DataClasses
		} )
	}
	return breachedReduced
}

