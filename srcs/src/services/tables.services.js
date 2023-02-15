import { getBreached } from "../pages/api/breachedsites.js"

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

export async function generateDataForTable(dataset)
{
	const breachedData = await getBreached()
	const dataCDS = await fetch(`https://haveibeenpwned.com/api/v3/dataclasses`)
	const dataClassesDataSet = await dataCDS.json()
	const dataClassesTableElements = []

	dataClassesDataSet.map((item) => dataClassesTableElements.push({name: item,  times: 0}) )
	breachedData.map((site) => countElementsOfSite(dataClassesTableElements, site.dataclasses))
	dataClassesTableElements.sort((a, b) => a.times < b.times ? 1 : -1);
//	console.log(breachedData)
//	console.log(a)
	return (dataClassesTableElements.slice(0,10))
}
