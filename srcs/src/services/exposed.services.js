import { toSha } from '@/utils/cryptoUtils.js'
import axios from "axios"

//these services parse and create a JSON formatted payload from the pwnedpasswords.com API, to serve it internally and externally in /api/exposed

export async function createJsonFromExposedApiPayload(exposedHashes)
{
	const hashesJson = []

	const listOfHashes = exposedHashes.split('\r\n')
	for (let i = 0; i < listOfHashes.length; i++)
	{
		hashesJson.push({
			suffix: listOfHashes[i].substr(0,35),
			times: listOfHashes[i].substr(36)
		})
	}
	return hashesJson
}

export async function exposedApiCall(hashPassPrefix) {
	const exposedHashes = await axios
		.get(`https://api.pwnedpasswords.com/range/${hashPassPrefix}`)
		.then((r) => r.data)
		.catch((err) => console.log(err));
	const exposedHashesJson = await createJsonFromExposedApiPayload(exposedHashes)
	return exposedHashesJson
}

export const checkExposedPassword = async (pass, setExposedPass) => {
	const hashPass = toSha(pass)
	const hashPassPrefix = hashPass.substr(0,5).toUpperCase();
	const hashPassSuffix = hashPass.substr(5, 35).toUpperCase();
	const exposedHashes = await exposedApiCall(hashPassPrefix)

	for (let i = 0; i < exposedHashes.length; i++)
	{
		if (exposedHashes[i].suffix.includes(hashPassSuffix))
		{
			return (exposedHashes[i].times)
		}
	}
	return (0)
}
