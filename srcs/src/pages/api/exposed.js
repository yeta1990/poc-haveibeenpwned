import axios from "axios"
import { exposedApiCall, createJsonFromExposedApiPayload } from '@/services/exposed.services'

export default async function exposed(req, res)
{
	try {
		const result = await exposedApiCall(req.query.hash)
		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(403).json({
			err: "Error occured while querying, try something like this: /api/exposed?hash=21BD1 (5 first chars of a SHA-1 encoded pass)",
		});
	}
}
