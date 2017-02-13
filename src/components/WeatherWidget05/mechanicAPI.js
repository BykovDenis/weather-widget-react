export default class MechanicAPI {

  httpGet(url) {
    console.log('Запрос к серверу');
    const fetch = typeof window !== 'undefined' ? window.fetch : require('node-fetch');
    fetch(url)
      .then((response) => response.json())
      .then((data)=> this.prepareData(data));
  }

  responseWeatherData() {
    const url = 'http://api.openweathermap.org/data/2.5/weather?id=524901&units=metric&appid=2d90837ddbaeda36ab487f257829b667';
    console.log('Вызов метода');
    this.httpGet(url);
  }

  prepareData(data) {
    console.log(data);
  }
}

