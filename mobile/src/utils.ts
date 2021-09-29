export const getForecastUrl = (lat: number, lon: number): string =>
  `https://api.weatherapi.com/v1/forecast.json?key=e4a5f4febf174c7eaed164027212609&q=${lat},${lon}&days=3&aqi=no&alerts=no&hour=-1&lang=pt`;
