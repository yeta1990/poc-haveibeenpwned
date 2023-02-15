import axios from "axios"
import { getBreachedDataType, getBreachedDataTypeTop } from '@/services/tables.services'

export default async function breachedtypes(req, res)
{
	try {
		let result = []
		if (parseInt(req.query.top) == 10)
		{
			result = await getBreachedDataTypeTop(parseInt(req.query.top))
		}
		else
		{
			result = await getBreachedDataType()
		}
		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(403).json({
			err: "Error occured while querying breached sites.",
		});
	}	
}
