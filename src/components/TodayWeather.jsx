import dayjs from 'dayjs';
import React from 'react';
import styles from './TodayWeather.module.css';

const TodayWeather = ({ dataDaily }) => {
  const iconUrl = dataDaily.current.condition.icon.replace('64x64', '128x128');

  return (
    <div className={styles.todayContainer}>
      <div className={styles.todayBlock}>
        <div className={styles.todayMainInfo}>
          <h1 className={styles.todayCityName}>{dataDaily.location.name}</h1>
          <p className={styles.todayCityDate}>
            {dayjs(dataDaily.location.localtime).format('dddd, D MMM')}
          </p>
          <img className="w-32" src={`https:${iconUrl}`} />
          <h2 className={styles.todayWeather}>{Math.trunc(dataDaily.current.temp_c)} ℃</h2>
          <p className={styles.todayCondition}>{dataDaily.current.condition.text}</p>
        </div>
        <div className={styles.addInfo}>
          <div className={styles.addInfoLeft}>
            <div className="text-base">Ощущается</div>
            <div className="text-base">Скорость ветра</div>
            <div className="text-base">Влажность</div>
          </div>
          <div className={styles.addInfoRight}>
            <div className="text-base">{Math.trunc(dataDaily.current.feelslike_c)} ℃</div>
            <div className="text-base">{Math.trunc(dataDaily.current.wind_kph)} км/ч</div>
            <div className="text-base">{dataDaily.current.humidity} %</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayWeather;
