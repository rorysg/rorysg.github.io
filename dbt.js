function Card(pills,anxiety,sadness,energy,joy,notes){
	this.pills = pills;
	this.anxiety = anxiety;
	this.sadness = sadness;
	this.energy = energy;
	this.joy = joy;
	this.notes = notes;
}

function saveCard(){
	let diary = new Card(document.getElementById("pills").checked, document.getElementById("anxiety").value, document.getElementById("sadness").value, document.getElementById("energy").value, document.getElementById("joy").value, document.getElementById("notes").value);

	localStorage.setItem("card", JSON.stringify(diary));
}

function loadCard(){
	let diary = JSON.parse(localStorage.getItem("card"));

	document.getElementById("pills").checked = diary.pills;
	document.getElementById("anxiety").value = diary.anxiety;
	document.getElementById("sadness").value = diary.sadness;
	document.getElementById("energy").value = diary.energy;	document.getElementById("joy").value = diary.joy;
	document.getElementById("notes").value = diary.notes;
}

document.getElementById("save").addEventListener("click", saveCard);
document.getElementById("load").addEventListener("click", loadCard);
