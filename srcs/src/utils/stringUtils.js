

export function hasEmailValidFormat(email)
{
	return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/g.test(email))
}
