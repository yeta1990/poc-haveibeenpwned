
import sha1 from 'crypto-js/sha1'

export function toSha(str)
{
	return (sha1(str).toString())
}
