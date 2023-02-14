import axios from "axios"

export async function getBreached() {
	const result = await fetch('https://haveibeenpwned.com/api/v3/breaches');
	const data = await result.json()
	return data
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
