import axios from 'axios';


const apiService = {
  async getHotelsInCity(searchQuery, date) {
    const сityId = await axios.get('https://engine.hotellook.com/api/v2/lookup.json', {
      params: {
        lang: 'en',
        lookFor: 'city',
        limit: '1',
        convertCase: '1',
        ...searchQuery,
      },
    })
      .then(({ data: { results: { locations } } }) => locations[0].id)
      .catch((error) => console.error(error));

    return await axios.get('https://yasen.hotellook.com/tp/public/widget_location_dump.json', {
      params: {
        currency: 'rub',
        language: 'ru',
        limit: '50',
        id: сityId,
        type: 'popularity',
        token: '2e008ed683b1d0b7bde67d99528f808d',
        ...date,
      },
    })
  },

  async getWatherInCity(searchQuery) {
    const сityСoordinates = await axios.get('https://engine.hotellook.com/api/v2/lookup.json', {
      params: {
        lang: 'en',
        lookFor: 'city',
        limit: '1',
        convertCase: '1',
        ...searchQuery,
      },
    })
        .then(({ data: { results: { locations } } }) => locations[0].location)
        .catch((error) => console.error(error));
        
    return await axios.get('https://api.openweathermap.org/data/2.5/forecast/daily', {
      params: {
        units: 'metric',
        cnt: '16',
        appid: '47fe20af59af3bbf2a3b306a18fdb1d7',
        lat: сityСoordinates.lat,
        lon: сityСoordinates.lon,
      },
    })
  }
};

export default apiService;
