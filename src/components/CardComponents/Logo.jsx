import image from "../../assets/logo-carrier-sm-default.png";

const Logo = () => {
  return (
    <div className="card__logo-container">
      <img className="card__logo" alt="" src={image}></img>
    </div>
  );
};

export default Logo;
