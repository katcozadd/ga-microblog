const form = document.getElementById('blogForm')
//const submit = document.getElementById('submitButton').value;

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const inputValue = document.getElementById('textBox').value;
	const myList = document.getElementById('myList')
	let textNode = document.createTextNode(inputValue);
	myList.innerHTML + inputValue;
	let node = document.createElement('li');
	node.appendChild(textNode);
	document.getElementById("myList").appendChild(node); 
	document.getElementById('textBox').value = '';
console.log(inputValue);
});


