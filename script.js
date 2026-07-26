function insert_Row() {
    let table = document.querySelector('#sampleTable');
	let newRow = document.createElement('tr');
	let newRowData1 = document.createElement('td');
	let newRowData2 = document.createElement('td');
	newRowData1.textContent = "New Cell1"
	newRowData2.textContent = "New Cell2"
	newRowData1.setAttribute('value','New Cell1');
	newRowData2.setAttribute('value','New Cell2');
	newRow.appendChild(newRowData1);
	newRow.appendChild(newRowData2);
	table.prepend(newRow);
}
