import React from "react";
import { ReactComponent as Gold } from "../assets/IconStarGold.svg";
import { ReactComponent as White } from "../assets/IconStarWhite.svg";

const Stars = (props) => {
  // Only return stars if value exists
  if (props.stars !== undefined && props.stars !== null) {
    // Takes in a number. Returns an array of star elements proportional to rating
    const countStars = (goldStarCount) => {
      let starArray = [],
        key = 0;

      while (starArray.length < 5) {
        if (starArray.length < goldStarCount) {
          starArray.push(<Gold key={key} />);
          key++;
        } else {
          starArray.push(<White key={key} />);
          key++;
        }
      }
      return starArray;
    };

    return <div> {countStars(props.stars)}</div>;
  } else {
    return null;
  }
};

export default Stars;
