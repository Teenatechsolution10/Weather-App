const handleFormSubmit =(event)=>{
	event.preventDefault();
	apiCall();
} 

const apiCall = async()=>{

	let cityName = document.getElementById("cityNameInput").value;
	const loader = document.getElementsByClassName('loader')[0];
	loader.style.display = "block"
	const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${cityName}`
	
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5f179c2619msh0e7de2ee3526cf1p12eb9djsnb20c618dd587',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};
	try {
		const response = await fetch(url, options);
		// console.log(response)
		const result = await response.json();
		loader.style.display = "none";
		const heading = document.getElementById("temperatureHeading");
		const heading2 = document.getElementById("temperatureHeading2");

		if(isNaN(result?.main?.temp)){
			heading.innerHTML = "Sorry! Cant find temperature of this location!!"
		}
		else{

			heading.innerHTML = "Temperature in " +cityName + " is " + Math.round(result?.main?.temp - 273 )+ " Degree Celcius"
			heading2.innerHTML = "Wind Speed: " + result?.wind?.speed+ " m/s"
		}
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}
let counter = 1;
function changeMode(){
	if(counter%2!=0){
		document.body.style.backgroundImage = "url('dark.jpeg')";
		body.style.color ="white"
		counter++;
	}
	else{
		document.body.style.backgroundImage = "url('light.jpg')";
		body.style.color ="black"
		counter++;
	}
	
}