import axios from "axios"
import { createJsonFromExposedApiPayload } from '@/services/exposed.services'

export default async function exposed(req, res)
{
	try {
		const rawData = await axios('https://api.pwnedpasswords.com/range/' + req.query.hash);
		const result = await createJsonFromExposedApiPayload(rawData.data)
		console.log(result)
		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(403).json({
			err: "Error occured while querying .",
		});
	}
}
