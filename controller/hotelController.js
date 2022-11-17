const axios = require("axios");

const searchLocation = (req, res) => {
	const options = {
		method: 'GET',
		url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation',
		params: { query: req.query.query },
		headers: {
			'X-RapidAPI-Key': '75d1047cf7mshee13806ccbf20fap1fe0b1jsn26e5e9a32742',
			'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
		}
	};

	axios.request(options).then(function (response) {
		res.json(response.data);
	}).catch(function (error) {
		console.error(error);
	});
}

const getHotelsFilter = (req, res) => {
	const options = {
		method: 'GET',
		url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/getHotelsFilter',
		params: { geoId: req.query.geoId, checkIn: req.query.checkIn, checkOut: req.query.checkOut },
		headers: {
			'X-RapidAPI-Key': '5c476d6342msh05ee9313efa0affp17029cjsnae85b77e1954',
			'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
		}
	};

	axios.request(options).then(function (response) {
		res.json(response.data);
	}).catch(function (error) {
		console.error(error);
	});
}

const searchHotels = (req, res) => {
	const options = {
		method: 'GET',
		url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels',
		params: {
			geoId: req.query.geoId,
			checkIn: req.query.checkIn,
			checkOut: req.query.checkOut,
			pageNumber: req.pageNumber,
			currencyCode: 'USD'
		},
		headers: {
			'X-RapidAPI-Key': 'ed1f8f4563mshe1f5daee0905f9fp1042f6jsnb476b5ea36ae',
			'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
		}
	};
	const baseurl="http://localhost:3030/"
	axios.request(options).then(function (response) {
		// res.json(response.data);
		res.render("../views/result",{"scrapped":response.data,"base":baseurl});
	}).catch(function (error) {
		console.error(error);
	});
}

const getHotelDetails = (req, res) => {
	const options = {
		method: 'GET',
		url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/getHotelDetails',
		params: {
			id: req.query.id,
			checkIn: req.query.checkIn,
			checkOut: req.query.checkOut,
			currency: 'USD'
		},
		headers: {
			'X-RapidAPI-Key': 'ed1f8f4563mshe1f5daee0905f9fp1042f6jsnb476b5ea36ae',
			'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
		}
	};

	axios.request(options).then(function (response) {
		res.json(response.data);
	}).catch(function (error) {
		console.error(error);
	});
}

module.exports = { searchLocation, getHotelsFilter, searchHotels, getHotelDetails };