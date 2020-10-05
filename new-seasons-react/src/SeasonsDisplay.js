import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? 'summer' : 'winter';
  else return lat > 0 ? 'winter' : 'summer'
};

const config = {
  summer: {
    text: `it's summer`,
    icon: `some icon`
  },
  winter: {
    text: `it's winter`,
    icon: `some icon`
  }
}

const SeasonsDisplay = (props) => {
  
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, icon} = config[season]
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default SeasonsDisplay;