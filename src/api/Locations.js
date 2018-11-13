const CLIENT_ID = "PCKGXCKRIBY0PJJPEALNYAPRN14DBJBCYMFPZTFH0FDYRF0C";
const CLIENT_SECRET = "I0RVYA5RUITSOJSWZ5HCCDVLXQV0BUQILFJZOSRKYT0FYLVK";

 export const getLocations = () => 
	fetch(`https://api.foursquare.com/v2/venues/explore?cat=food&near=petaluma&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20181101`)
		.then(resp => resp.json())
		.then(result => result.response.groups[0].items)
		.catch(error => {alert("Error loading page...")})






