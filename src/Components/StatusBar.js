import React, { Component } from 'react';

class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: null,
      condition: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather() {
    const url =
      'https://api.open-meteo.com/v1/forecast?latitude=33.6411&longitude=-117.9187&current=temperature_2m,weather_code&temperature_unit=fahrenheit';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const temp = Math.round(data.current.temperature_2m);
        const code = data.current.weather_code;
        this.setState({
          temperature: temp,
          condition: this.mapWeatherCode(code),
          loading: false,
        });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  mapWeatherCode(code) {
    if (code === 0) return 'Clear';
    if (code === 1 || code === 2) return 'Partly Cloudy';
    if (code === 3) return 'Cloudy';
    if (code >= 45 && code <= 48) return 'Fog';
    if (code >= 51 && code <= 67) return 'Rain';
    if (code >= 71 && code <= 77) return 'Snow';
    if (code >= 80 && code <= 82) return 'Showers';
    if (code >= 95) return 'Storms';
    return 'Clear';
  }

  render() {
    const { temperature, condition, loading } = this.state;

    return (
      <div className="status-bar">
        <span className="status-dot"></span>
        <span className="status-location">Costa Mesa, CA</span>
        <span className="status-divider">&middot;</span>
        <span className="status-weather">
          {loading ? 'Loading...' : `${temperature}\u00B0F \u00B7 ${condition}`}
        </span>
      </div>
    );
  }
}

export default StatusBar;