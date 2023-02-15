import { toSha } from '@/utils/cryptoUtils.js'
import axios from "axios"

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
		.get(`/api/exposed?hash=${hashPassPrefix}`)
		.then((r) => r.data)
		.catch((err) => console.log(err));
	return exposedHashes 
}

export const checkExposedPassword = async (pass, setExposedPass) => {
	const hashPass = toSha(pass)
	const hashPassPrefix = hashPass.substr(0,5).toUpperCase();
	const hashPassSuffix = hashPass.substr(5, 35).toUpperCase();
	const exposedHashes = await exposedApiCall(hashPassPrefix)
	let exposedPass = false;

	for (let i = 0; i < exposedHashes.length; i++)
	{
		if (exposedHashes[i].suffix.includes(hashPassSuffix))
		{
			exposedPass = true
		}
	}
	return (exposedPass)
}
