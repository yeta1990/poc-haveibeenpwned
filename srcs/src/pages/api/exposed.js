import axios from "axios"

export default async function exposed(req, res)
{
	try {
		const result = await axios('https://api.pwnedpasswords.com/range/' + req.query.hash);
		res.status(200).json(result.data);
	} catch (err) {
		console.log(err);
		res.status(403).json({
			err: "Error occured while querying .",
		});
	}	
}
