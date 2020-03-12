import React from "react";

import DataItem from "./DataItem";
import { GoogleMapsKey } from "../util/API_KEYS";
import "./DataRow.scss";

const DataRow = ({ data: { temp, pressure, humidity }, city }) => {
  return (
    <div className="dataRow">
      <p className="city">{city}</p>
      <DataItem data={temp.map(item => item - 273.15)} color="red" unit=" °C" />
      <DataItem data={pressure} color="blue" unit="mbar" />
      <DataItem data={humidity} color="purple" unit="%" />
    </div>
  );
};

export default DataRow;

// https://maps.googleapis.com/maps/api/staticmap?center=${city}&zoom=13&size=100x150&maptype=roadmap&key=${GoogleMapsKey}
