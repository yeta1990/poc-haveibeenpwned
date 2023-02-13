import { toSha } from '@/utils/cryptoUtils.js'
import axios from "axios"


export async function exposedApiCall(shortHashPass) {
	const exposedHashes = await axios
		.get(`/api/exposed?hash=${shortHashPass}`)
		.then((r) => r.data)
		.catch((err) => console.log(err));
	return exposedHashes;
}


export const checkExposedPassword = async (pass, setExposedPass) => {
	const hashPass = toSha(pass)
	const hashPassPrefix = hashPass.substr(0,5).toUpperCase();
	const hashPassSuffix = hashPass.substr(5, 35).toUpperCase();
	const exposedHashes = await exposedApiCall(hashPassPrefix)
	const listOfHashes = exposedHashes.split('\r\n')
	
	for (let i = 0; i < listOfHashes.length; i++)
	{
		if (listOfHashes[i].includes(hashPassSuffix))
			setExposedPass(true)
	}
}

