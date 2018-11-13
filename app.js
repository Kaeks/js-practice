var array = [];
var columns = 10;
var lines = 2;

function addLine() {
	let x = document.querySelector("#yung tbody");
	x.innerHTML += '<tr id="row' + lines + '"></tr>';
	applyColumns();
	lines++;
}

function removeLine() {
	if (lines == 0) {
		return;
	}
	let x = document.querySelector("#yung tbody");
	x.removeChild(x.lastElementChild);
	lines--;
}

function setColumns() {
	let val = document.getElementById("input-columns").value;
	columns = val;
	applyColumns();
}

function applyColumns() {
	let x = document.querySelectorAll("#yung tr");
	for (let i = 0; i < x.length; i++) {
		let y = document.querySelectorAll("#row" + i + " td");
		let colAmt = y.length;
		while (colAmt > columns) {
			x[i].removeChild(x[i].lastElementChild);
			colAmt--;
		}
		while (colAmt < columns) {
			x[i].innerHTML += "<td></td>";
			colAmt++;
		}
	}
}

function fill() {
	//console.log("filled");
	let x = document.querySelectorAll("#row0 td");
	for (let i = 0; i < x.length; i++) {
		let rand = getRandInt(-100, 100);
		x[i].innerHTML = rand;
		array[i] = rand;
	}
	//console.log(array);
	quickSort(array, 0, array.length - 1);
	displayArray(array);
}

function displayArray(arr) {
	let x = document.querySelectorAll("#row1 td");
	for (let i = 0; i < x.length; i++) {
		x[i].innerHTML = arr[i];
	}
}

function swap(arr, indexA, indexB) {
	//console.log("swapped");
	let temp = arr[indexA];
	arr[indexA] = arr[indexB];
	arr[indexB] = temp;
	//console.log(arr);
}

function partition(arr, start, end) {
	//console.log("[PARTITION]");
	let pivotIndex = end;
	let pivot = arr[end]; // set pivot to last position in array
	let left = start;
	let right = end;
	//console.log("Scope:\nStart: " + start + "\nEnd: " + end);
	//console.log("Pivot:\nIndex: " + pivotIndex + "\nValue: " + pivot);
	while (left < right) {
		while (arr[left] <= pivot && left < end) {
			left++;
		}
		while (arr[right] >= pivot && right > start) {
			right--;
		}
		//console.log("Left: " + left + "\nRight: " + right);
		if (left < right) {
			//console.log("Found swapping pair");
			//console.log("Left:\nIndex: " + left + "\nValue: " + arr[left]);
			//console.log("Right:\nIndex: " + right + "\nValue: " + arr[right]);
			//swap
			swap(arr, left, right);
		}
	}

	if (arr[left] > pivot) {
		//console.log("swap pivot");
		//swap pivot with cursor
		swap(arr, left, pivotIndex);
	}
	return left;
}

function quickSort(arr, start, end) {
	//console.log("[QUICKSORT]");
	//console.log("Start: " + start + "\nEnd: " + end);
	if (start < end) {
		let part = partition(arr, start, end);
		//console.log("Partition: " + part);
		quickSort(arr, start, part - 1);
		quickSort(arr, part + 1, end);
	}
	//console.log(arr);
}

function getRandInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dupli() {

}

window.onload = function() {

}
