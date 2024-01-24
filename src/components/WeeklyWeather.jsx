import dayjs from 'dayjs';
import React from 'react';
import styles from './WeeklyWeather.module.css';

const WeeklyWeather = ({ dataWeekly }) => {
  return (
    <div className={styles.weeklyBlock}>
      {dataWeekly.forecast.forecastday.map((obj, index) => {
        if (index === 0) {
          return null;
        }

        return (
          <div key={obj.date_epoch} className={styles.weeklyData}>
            <div className={styles.weeklyDay}>{dayjs(obj.date).format('dd, D MMM')}</div>
            <div className="flex flex-row justify-center items-center">
              <div className="font-semibold">{obj.day.avgtemp_c} ℃</div>
              <img src={`https:${obj.day.condition.icon}`} />
            </div>
            <div>
              {obj.day.maxtemp_c}℃/{obj.day.mintemp_c}℃
            </div>
            <div className="">{obj.day.condition.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default WeeklyWeather;
