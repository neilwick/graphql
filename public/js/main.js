// const { query } = require("express");

window.addEventListener('load', async (e) => {
	const query = "{ students { first, last, dob, courses { name, description, teacher {id, first, last}}}}";

	let q = await fetch('/gql?query=' + query);

	let data = await q.json();

	console.log(data);
});
