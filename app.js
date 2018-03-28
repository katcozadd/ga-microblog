const form = document.getElementById('blogForm')
//const submit = document.getElementById('submitButton').value;

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const inputValue = document.getElementById('textBox').value;
	const myList = document.getElementById('myList')
	myList.innerHTML += inputValue;
console.log(inputValue);
});

