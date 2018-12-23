document.getElementById("myBtn").addEventListener("click", addItem);

function addItem() {
	const item = document.getElementById("field").value;
	let ul = document.getElementById("list");
	let li = document.createElement("li");

	li.appendChild(document.createTextNode(item));
	document.getElementById("list").appendChild(li);

	document.getElementById("field").value = "";
}
