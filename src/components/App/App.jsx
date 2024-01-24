import { useEffect, useState } from 'react';
import './App.css';
import logo from '../../images/logo.svg';
import axios from 'axios';
import TodayWeather from '../TodayWeather';
import WeeklyWeather from '../WeeklyWeather';
import Search from 'antd/es/input/Search';
import styles from './App.module.css';

function App() {
  const [dataDaily, setDataDaily] = useState({});
  const [dataWeekly, setDataWeekly] = useState({});
  const [isLoadingDaily, setIsLoadingDaily] = useState(true);
  const [isLoadingWeekly, setIsLoadingWeekly] = useState(true);
  const [input, setInput] = useState('');
  const [cityName, setCityName] = useState('Астана');
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?q=${cityName}&lang=ru&key=620afdbb5f5647fab48150618240801`,
      )
      .then((res) => {
        setDataDaily(res.data);
      })
      .catch((err) => {
        setError(err.response.data.error.message);
      })
      .finally(() => {
        setIsLoadingDaily(false);
      });
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?q=${cityName}&lang=ru&days=3&key=620afdbb5f5647fab48150618240801`,
      )
      .then((res) => {
        setDataWeekly(res.data);
      })
      .catch((err) => {
        setError(err.response.data.error.message);
      })
      .finally(() => {
        setIsLoadingWeekly(false);
      });
  }, [cityName]);

  const handleChange = (value) => {
    setInput(value);
  };
  const handleSearch = (value) => {
    setCityName(value);
    setInput('');
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerBlock}>
          <p className={styles.siteTitle}>Weather boy</p>
          <a className="logo" href="#">
            <img className={styles.logo} src={logo} />
          </a>
        </div>
      </header>
      <main className={styles.main}>
        <Search
          className="pb-10 custom-search "
          value={input}
          onChange={(e) =>
            handleChange(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase(),
            )
          }
          placeholder="Input city name"
          style={{
            width: 500,
          }}
          allowClear
          enterButton="Search"
          size="large"
          onSearch={() => handleSearch(input)}
        />
        <div className={styles.cityInfo}>
          {error ? (
            <div className={styles.error}>{error}</div>
          ) : (
            <>
              <div>{isLoadingDaily ? 'Загрузка....' : <TodayWeather dataDaily={dataDaily} />}</div>
              <div>
                {isLoadingWeekly ? 'Загрузка...' : <WeeklyWeather dataWeekly={dataWeekly} />}
              </div>{' '}
            </>
          )}
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© Site was made in practise purpose by Damir Kurmanguzhin</p>
      </footer>
    </>
  );
}

export default App;
