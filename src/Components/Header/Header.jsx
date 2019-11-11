import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Header.scss";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getStartDateFormat, getEndDateFormat } from '../../Services/moment';

export default function Header() {
  const history = useHistory();
  
  const [inputValue, setInputValue] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleChangeValue = ({ target }) => {
    setInputValue(target.value);
  };

  const addValueToParams = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      history.push(
        `/results/${inputValue}/${getStartDateFormat(startDate)}/${getEndDateFormat(endDate)}`
        );
    }
  };

  return (
    <section className="header container">
        <form className="search-form" onSubmit={(e) => addValueToParams(e)}>
          <input
            className="search-form__search"
            value={inputValue}
            type="text"
            placeholder="Куда намылился?"
            onChange={(e) => handleChangeValue(e)}
          />
          <DatePicker
            className="search-form__date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="check in"
          />
          <DatePicker
            className="search-form__date"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            endDate={endDate}
            minDate={startDate}
            placeholderText="check out"
          />
          <button
            type="submit"
            className="search-form__button"
          >
            <FontAwesomeIcon className="icon-comment" icon={faSearch} size="lg" />
          </button>
        </form>
    </section>
  )
};
