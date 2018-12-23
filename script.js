document.getElementById("myBtn").addEventListener("click", addItem);

function addItem() {
	let item = document.getElementById("field").value;
	document.getElementById("print").appendChild(document.createTextNode(item));
}
