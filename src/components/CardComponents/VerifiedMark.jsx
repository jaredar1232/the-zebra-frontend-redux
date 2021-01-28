import { ReactComponent as White } from "../../assets/IconStarWhite.svg";

const VerifiedMark = (props) => {
  if (props.isVerified) {
    return (
      <div className="card__verified-mark">
        <White />
      </div>
    );
  } else {
    return null;
  }
};

export default VerifiedMark;
