import axios from "axios"
import { getBreached } from '@/services/breachedSites.services'


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
