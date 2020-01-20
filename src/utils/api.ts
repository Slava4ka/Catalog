export async function fetchProductsList() {
	console.log('in')
	const res = await fetch('https://appevent.ru/dev/task1/catalog', {
		method: 'get',
		headers: {
			Accept: 'application/json'
		}
	})
	return res.json()
}
