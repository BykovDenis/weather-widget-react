const weatherData = {
  "coord": {
    "lon": 37.62,
    "lat": 55.75
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 0.98,
    "pressure": 999.89,
    "humidity": 97,
    "temp_min": 0.98,
    "temp_max": 0.98,
    "sea_level": 1020.4,
    "grnd_level": 999.89
  },
  "wind": {
    "speed": 4.41,
    "deg": 273.001
  },
  "clouds": {
    "all": 80
  },
  "dt": 1487398998,
  "sys": {
    "message": 0.0024,
    "country": "RU",
    "sunrise": 1487393189,
    "sunset": 1487428874
  },
  "id": 524901,
  "name": "Moscow",
  "cod": 200
};

export function getWeatherData(req) {
  let weather = req.session.weather;
  if (!weather) {
    weather = initialWidgets;
    req.session.weather = weatherData;
  }
  return weather;
}

export default function load(req) {
  return new Promise((resolve, reject) => {
    // make async call to database
    setTimeout(() => {
      if (Math.random() < 0.33) {
        reject('Widget load fails 33% of the time. You were unlucky.');
      } else {
        resolve(getWeatherData(req));
      }
    }, 1000); // simulate async load
  });
}
