import axios from "axios"

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
			breachyear: data[i].BreachDate.substr(0,4)
		} )
	}
	return breachedReduced
}

export default async function breachedsites(req, res)
{
	try {
		const result = await getBreached()
		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(403).json({
			err: "Error occured while querying breached sites.",
		});
	}	
}
