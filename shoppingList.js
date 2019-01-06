var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var li = document.getElementsByTagName("li");
// var ul = document.getElementsByTagName("ul");
var deleteButton = document.getElementById("delete");
var list = document.getElementById("list");
var lastid = 0;

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	li.addEventListener("click", toggleDone);
	li.setAttribute("id", (input.value));
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	deleteButton.setAttribute("id", "delete");
	deleteButton.addEventListener("click", function (e) {
            this.parentNode.parentNode.removeChild(this.parentNode);
        });
	li.appendChild(deleteButton);
	lastid+=1;	
	list.appendChild(li);
	input.value = "";

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone() {
    var li = document.getElementById("input.value");
    this.classList.toggle('done');
 }


enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
// deleteButton.addEventListener("click", removeItem);