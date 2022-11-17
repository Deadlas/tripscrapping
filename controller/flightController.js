const axios = require("axios");

const searchLocation = (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport',
        params: { query: req.query.query },
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

const getFlightsFilter = (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/getFilters',
        params: {
            sourceAirportCode: req.query.sourceAirportCode,
            destinationAirportCode: req.query.destination,
            date: req.query.date,
            itineraryType: req.query.itineraryType,
            classOfService: req.query.classOfService
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

const searchFlights = (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights',
        timeout:10000,
        params: {
            sourceAirportCode: req.query.sourceAirportCode,
            destinationAirportCode: req.query.destinationAirportCode,
            date: req.query.date,
            itineraryType: req.query.itineraryType,
            classOfService: req.query.classOfService,
            numAdults: req.query.numAdults,
            numSeniors: req.query.numSeniors,
            classOfService: req.query.classOfService,
            returnDate: req.query.returnDate,
            currencyCode: 'USD'
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

module.exports = { searchLocation, getFlightsFilter, searchFlights };