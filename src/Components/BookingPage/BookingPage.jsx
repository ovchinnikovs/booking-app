import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import "./BookingPage.scss";

import { getDateFromDT } from '../../Services/moment';

import apiService from '../../Services/APIService';
import Icon from '../Icon/Icon';

export default function BookingPage({ match }) {
  const { searchQuery } = match.params;
  const { startDate } = match.params;
  const { endDate } = match.params;

  const [hotels, setHotels] = useState([]);
  const [weatherList, setWeatherList] = useState([]);

  const dateOnSelectedDays = weatherList.filter((item) => {
    return getDateFromDT(item.dt).slice(0, 10) >= startDate &&
           getDateFromDT(item.dt).slice(0, 10) <= endDate;
  })

  useEffect(() => {
    apiService.getHotelsInCity({ query: searchQuery },
      {
        check_in: startDate,
        check_out: endDate,
      })
        .then(({ data: { popularity } }) => setHotels(popularity));

      apiService.getWatherInCity({ query: searchQuery })
        .then((({ data: { list } }) => setWeatherList(list)));
  }, [searchQuery, startDate, endDate]);

  return (
    <section className="container">
      <div className="hotels">
        { 
          hotels.map((item) => (
            <div key={item.hotel_id} className="hotels__item hotel">
              <div className="hotel__info">
                <div className="hotel__name">
                  {item.name}
                </div>

                <div className="hotel__stars">
                  звезд: {item.stars}
                </div>

                <div className="hotel__text-date">
                  Выбранная дата:
                </div>

                <div className="hotel__weather weather">
                  {
                    dateOnSelectedDays.map((day) => 
                      <div key={day.dt} className="weather__day">
                          <div className="weather__date">{getDateFromDT(day.dt, 'D/M')}</div>
                          <div>{getDateFromDT(day.dt, 'ddd')}</div>
                          <Icon size="small" key={day.dt} weatherType={day.weather[0].main.toLowerCase()} />
                          <div>{Math.floor(day.temp.day)}°</div>
                      </div>
                    )
                  }
                </div>
              </div>
              
              <div className="hotel__photo">
                  <img 
                    src={`https://photo.hotellook.com/image_v2/limit/h${item.hotel_id}_1/320/210.auto`}
                    alt="no comments"
                  />
                </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

BookingPage.propTypes = {
  match: propTypes.shape().isRequired,
};
