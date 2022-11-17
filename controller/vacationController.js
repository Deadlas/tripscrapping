const axios = require("axios");

const searchLocation = (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://tripadvisor16.p.rapidapi.com/api/v1/rentals/searchLocation',
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

const searchVacations = (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://tripadvisor16.p.rapidapi.com/api/v1/rentals/rentalSearch',
        params: {
            geoId: req.query.geoId,
            arrival: req.query.arrival,
            departure: req.query.departure,
            sortOrder: req.query.sortOrder,
            page: req.query.page,
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

const getVacationDetails = (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://tripadvisor16.p.rapidapi.com/api/v1/rentals/rentalDetails',
        params: {
            rentalId: 'VacationRentalReview-g60763-d2235027-Garden_apartment_in_a_harlem_townhouse-New_York_City_New_York'
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

module.exports = { searchLocation, searchVacations, getVacationDetails };