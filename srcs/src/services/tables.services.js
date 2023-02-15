import { getBreached } from '@/services/breachedSites.services'

function countElementsOfSite(items, classes)
{
	classes.map((c) => sumOneElement(items, c))
}

function sumOneElement(items, name)
{
	for (let i = 0; i < items.length; i++){
		if (items[i].name == name)
		{
			items[i].times += 1
			return ;
		}
	}
}

export async function getBreachedDataType()
{
	const breachedData = await getBreached()
	const dataCDS = await fetch(`https://haveibeenpwned.com/api/v3/dataclasses`)
	const dataClassesDataSet = await dataCDS.json()
	const dataClassesElements = []

	dataClassesDataSet.map((item) => dataClassesElements.push({name: item,  times: 0}) )
	breachedData.map((site) => countElementsOfSite(dataClassesElements, site.dataclasses))
	dataClassesElements.sort((a, b) => a.times < b.times ? 1 : -1);
	return (dataClassesElements)
}

export async function getBreachedDataTypeTop(top)
{
	const dataClassesElements = await getBreachedDataType()
	return (dataClassesElements.slice(0,top))
}



