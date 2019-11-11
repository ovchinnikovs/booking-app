import React from 'react';
import "../Icon/wu-icons-style.scss";
import "../Icon/wu-icons-style.min.scss";

import { getIconByWeatherType } from './types';

export default function Icon({ size, weatherType }) {
  const iconSize = function() {
    const sizes = {
      small: '32',
      medium: '64',
      large: '128',
    };
    return sizes[size || 'small'];
  };

    return (
      <>
        <i className={`wu wu-solid-black wu-${iconSize()} wu-${getIconByWeatherType(weatherType)}`} />
      </>
    );
}
