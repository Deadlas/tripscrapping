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

const searchDropoff = (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://tripadvisor16.p.rapidapi.com/api/v1/cars/searchCarsSameDropOff',
        params: {
            pickUpPlaceId: req.query.pickUpPlaceId,
            pickUpLocationType: req.query.pickUpLocationType,
            pickUpDate: req.query.pickUpDate,
            dropOffDate: req.query.dropOffDate,
            pickUpTime: req.query.pickUpTime,
            dropOffTime: req.query.dropOffTime,
            order: req.query.order,
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

module.exports = { searchLocation, searchDropoff };