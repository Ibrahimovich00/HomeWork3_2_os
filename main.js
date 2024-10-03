fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response => response.json())
	.then(data => {
		data.forEach(user => {
			document.write(`<div class="post"><h2>Id: ${user.id}</h2> <h3>Title: ${user.title}</h3><p class="body">${user.body}</p></div>`)
		})
	})
	.catch(error => console.log(error))
