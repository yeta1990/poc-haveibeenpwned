
/*
 * this is a dataset example
 *
const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    }
*/

// given a dataset with a year data field YYYY, creates
// a sorted array from the first year to the last, filling
// the gaps from the dataset without data
export async function createYearLabels(dataset, yearfield)
{
	const labelSet = new Set()
	dataset.map((item) => labelSet.add(item[yearfield]))

	const labelArray = Array.from(labelSet).sort()
	const startyear = parseInt(labelArray[0])
	const endyear = startyear + labelArray.length
	const yearsArray = []

	for (let i = startyear; i < endyear; i++)
	{
		yearsArray.push(i)
	}
	return labelArray
}

// count coincidences for each year to create the data field
export async function createDataField(dataset, yearfield, startyear, endyear)
{
	const dataField = Array(endyear - startyear + 1)
	for (let i = 0; i < dataField.length; i++)
	{
		dataField[i] = 0
	}
	dataset.map((item) => {
		dataField[item[yearfield] - startyear] += 1;
	})

	return dataField
}


export async function generateDataForLineChart(dataset, timefield, label)
{
	const labels = await createYearLabels(dataset, "breachyear")
	const datafield = await createDataField(dataset, "breachyear", labels[0], labels[labels.length - 1])

	const data = {}
	data["labels"] = labels
	data["datasets"] = []
	data["datasets"].push({
 		label: label,
		data: datafield,
		borderWidth: 1
	})
	return data
}


