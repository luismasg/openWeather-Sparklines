import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

import "./dataItem.scss";

const DataItem = ({ data, color, unit }) => {
  const min = Math.floor(Math.min(...data));
  const max = Math.floor(Math.max(...data));
  return (
    <div className="dataItem">
      <div className="minmax">
        <span>{max}</span>
        <span>{min}</span>
      </div>
      <Sparklines data={data} style={{ background: "#EEE" }}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <p className="unit"> {unit} </p>
    </div>
  );
};

export default DataItem;
