import { useState } from "react";
import "./ProgramsCard.scss";
import ottawa from "../../assets/Images/ottawa.png";
import windsor from "../../assets/Images/windsor.png";
import lakehead from "../../assets/Images/lakehead.png";
import cbu from "../../assets/Images/cbu.png";
import trent from "../../assets/Images/trent.png";
import CurrencyExchange from "../CurrencyExchange/CurrencyExchange";
import GoogleMaps from "../GoogleMaps/GoogleMaps";

function ProgramsCard({ program, programId }) {
  const [showInfo, setShowInfo] = useState(false);
  const [showCurrencyExchange, setShowCurrencyExchange] = useState(false);

  const openCurrencyExchange = () => {
    setShowCurrencyExchange(true);
  };
  const closeCurrencyExchange = () => {
    setShowCurrencyExchange(false);
  };

  const getLocation = (program) => {
    let latitude, longitude;

    if (program.school === "University of Ottawa") {
      latitude = 45.42337534421709;
      longitude = -75.68313816948728;
    } else if (program.school === "University of Windsor") {
      latitude = 42.304325993099134;
      longitude = -83.06604249801852;
    } else if (program.school === "Lakehead University") {
      latitude = 48.42194640902959;
      longitude = -89.2606234798844;
    } else {
      latitude = 46.176740865559275;
      longitude = -60.09207265372884;
    }
    return { latitude, longitude };
  };

  return (
    <div className="collegebox">
      <div className="collegebox__main">
        <h2 className="collegebox__school">{program.school}</h2>
        <img
          className="collegebox__img"
          src={
            program.school === "University of Ottawa"
              ? ottawa
              : program.school === "University of Windsor"
              ? windsor
              : program.school === "Lakehead University"
              ? lakehead
              : program.school === "Cape Breton University"
              ? cbu
              : trent
          }
          alt={program.school}
        />
        <h3 className="collegebox__program">{program.program}</h3>

        {showInfo && (
          <div className="collegeboxMore">
            <div className="collegebox__degree">
              <h3>{program.degree}</h3>
              <h3>
                {program.duration_value} {program.duration_unit}
              </h3>
            </div>
            <h3 className="collegebox__fees">{program.tuition_fees} </h3>

            <button
              onClick={openCurrencyExchange}
              className="collegebox__currencyBttn"
            >
              Exchange Currency
            </button>

            {/* Popup for CurrencyExchange */}
            {showCurrencyExchange && (
              <div className="collegebox__popup">
                
                  <CurrencyExchange />
                  <button
                    className="collegebox__currencyBttn--close"
                    onClick={closeCurrencyExchange}
                  >
                    Close
                  </button>
                
              </div>
            )}

            <button className="collegebox__program-url">
              <a
                href={program.program_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Program Website
              </a>
            </button>
            <div className="googleMap">
              <GoogleMaps getLocation={getLocation(program)} />
            </div>
          </div>
        )}
        <div className="collegebox__bttn--container">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="collegebox__bttn "
          >
            {showInfo ? "Hide Details" : "Explore More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProgramsCard;
