export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': 'c814e2cbebmsh5a4f5980d1bf865p16b4a9jsnc2962ff1bce8',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {headers:headers});

    const result = await response.json();

    return result
}
