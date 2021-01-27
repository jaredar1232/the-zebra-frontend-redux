import React from "react";
import { ReactComponent as White } from "../assets/IconStarWhite.svg";

const VerifiedMark = (props) => {
  if (props.isVerified) {
    return (
      <div className="verified-mark" data-testid="verifiedmark-test-id">
        <White />
      </div>
    );
  } else {
    return null;
  }
};

export default VerifiedMark;
