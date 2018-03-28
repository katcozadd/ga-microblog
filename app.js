const form = document.getElementById('blogForm')
const submit = document.getElementById('submitButton').value;
const li = document.getElementById('myList')

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const inputValue = document.getElementById('textBox').value;
	

console.log(inputValue);
});

