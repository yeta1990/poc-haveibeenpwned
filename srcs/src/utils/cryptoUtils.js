
import sha1 from 'crypto-js/sha1'

export function toSha(str)
{
	console.log(sha1(str).toString())
	return (sha1(str).toString())
}
