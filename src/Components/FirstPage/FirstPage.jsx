import React from 'react';
import { Link } from 'react-router-dom';
import "./FirstPage.scss";

import { toDaysDate, tomorrowsDate } from '../../Services/moment';

export default function FirstPage() {
  return (
    <section className="cities container">
      <div className="box-one">
        <Link to={`/results/kyiv/${toDaysDate}/${tomorrowsDate}`} className="box-one__item">
          <img className="box-one__img" src="https://photo.hotellook.com/static/cities/960x720/IEV.jpg" alt="no comments"/>
          <span className="box-one__name">Kyiv</span>
        </Link>
        <Link to={`/results/kharkiv/${toDaysDate}/${tomorrowsDate}`} className="box-one__item">
          <img className="box-one__img" src="https://photo.hotellook.com/static/cities/960x720/HRK.jpg" alt="no comments"/>
          <span className="box-one__name">Kharkiv</span>
        </Link>
      </div>

      <div className="box-two">
        <Link to={`/results/lviv/${toDaysDate}/${tomorrowsDate}`} className="box-two__item">
          <img className="box-two__img" src="https://photo.hotellook.com/static/cities/960x720/LWO.jpg" alt="no comments"/>
          <span className="box-two__name">Lviv</span>
        </Link>
        <Link to={`/results/odessa/${toDaysDate}/${tomorrowsDate}`} className="box-two__item">
          <img className="box-two__img" src="https://photo.hotellook.com/static/cities/960x720/ODS.jpg" alt="no comments"/>
          <span className="box-two__name">Odessa</span>
        </Link>
        <Link to={`/results/dnipro/${toDaysDate}/${tomorrowsDate}`} className="box-two__item">
          <img className="box-two__img" src="https://photo.hotellook.com/static/cities/960x720/DNK.jpg" alt="no comments"/>
          <span className="box-two__name">Dnipro</span>
        </Link>
      </div>

      <div className="box-three">
        <Link to={`/results/chernivtsi/${toDaysDate}/${tomorrowsDate}`} className="box-three__item">
          <img className="box-three__img" src="https://photo.hotellook.com/static/cities/960x720/CWC.jpg" alt="no comments"/>
          <span className="box-three__name">Chernivtsi</span>
        </Link>
        <Link to={`/results/vienna/${toDaysDate}/${tomorrowsDate}`} className="box-three__item">
          <img className="box-three__img"  src="https://photo.hotellook.com/static/cities/960x720/VIE.jpg" alt="no comments"/>
          <span className="box-three__name">Vienna</span>
        </Link>
      </div>
    </section>
  )
}
