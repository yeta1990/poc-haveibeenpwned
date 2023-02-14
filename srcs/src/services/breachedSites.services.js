
import axios from "axios"


function BreachedSite(Name, BreachDate, PwnCount)
{
	this.name = Name
	this.breachdate = BreachedDate
	this.pwncount = PwnCount
}


export async function breachedApiCall(){
	const breachedSites = await axios
		.get(`/api/breachedsites`)
		.then((r) => r.data)
		.catch((err) => console.log(err));
	return exposedHashes;
}

export const parseBreachedJson = async() => {

	const breachedJson = JSON.parse(await breachedApiCall())
	let breachedReduced = []
	let breachedSite;
	for (i = 0; i < 10; i++)
	{
//		breachedSite = new BreachedSite(breachedJson[i].name, breachedJson[i].breacheddate, breachedJson[i].pwncount)
//		breachedReduced.add (breachedSite)
		console.log(breachedJson[i])
	}
	return breachedReduced
}

export async function getBreachedSites() => {

	const breachedSites = await parseBreachedJson;

}
