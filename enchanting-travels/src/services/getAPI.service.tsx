
const httpPost = (endpoint : string, payload : any) =>{
	const options = {
		method : 'POST',
		headers : {'Content-type' : 'application/json'},
		body : JSON.stringify(payload)
	}
	return fetch(endpoint,options).then(data => data.json()).catch(error => error)
}

const httpGet = (endpoint : string) => {
	const options = {
		method : 'GET',

	}
	return fetch(endpoint,options)
	.then( data => data.json())
	.catch(error => error);

}


export  {httpPost ,httpGet}