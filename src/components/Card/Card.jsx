import axios from "axios";
import React, { useEffect, useState } from "react";
import Main from "../../containers/Main/Main";
import pauseIconMobile from "../../assets/images/pattern-divider-mobile.svg";
import pauseIconDesktop from "../../assets/images/pattern-divider-desktop.svg";
import diceIcon from "../../assets/images/icon-dice.svg";

const Card = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log("Response", response?.data);
        setData(response?.data?.slip);
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
    return () => {
      setData(null);
    };
  }, []);

  const changeQuoteHandler = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setData(response?.data?.slip);
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };

  return (
    <div className="bg-dark-800 p-5 w-72 rounded-md relative">
      <h2 className="text-[12px] font-bold text-primary tracking-[5px] text-center mb-2">
        ADVICE #<span className="text-[12px] ">{data?.id}</span>
      </h2>
      <p className="font-bold text-light text-center">
        &ldquo;{data?.advice}&rdquo;
      </p>
      <img
        src={pauseIconDesktop}
        alt="pause icon"
        className="text-[12px] text-light mt-4 mb-6 hidden xs:block"
      />
      <img
        src={pauseIconMobile}
        alt="pause icon"
        className="text-[12px] text-light mt-4 mb-6 block xs:hidden"
      />
      <button
        className="absolute p-3 bg-primary rounded-full left-1/2 -translate-x-1/2 duration-200 hover:shadow-[0_0_30px_2px_hsl(150,100%,66%)] cursor-pointer "
        onClick={changeQuoteHandler}
      >
        <img
          src={diceIcon}
          alt="dice icon"
          className="text-[12px] text-light "
        />
      </button>
    </div>
  );
};

export default Card;
