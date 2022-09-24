import React from "react";

import './Mobile.css'
import { useState } from "react";

const Mobile = () => {
  const [battery, setBattery] = useState(100);

  const increaseBattery = () => setBattery(battery + 10);
  const decreasesBattery = () => setBattery(battery - 10);

  return (
    <div className="mobile">
      <h1>{battery}</h1>
      <button disabled={battery < 1} onClick={decreasesBattery}>
        Battery down
      </button>
      <button disabled={battery > 99} onClick={increaseBattery}>
        Battery Up
      </button>
    </div>
  );
};

export default Mobile;
