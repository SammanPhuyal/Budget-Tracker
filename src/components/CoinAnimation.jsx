import React, { useEffect, useState } from "react";
import piggyBank from "../assets/piggy-bank.png";
import "../styles/CoinAnimation.css";

const CoinAnimation = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins((prevCoins) => [
        ...prevCoins,
        { id: Date.now() }
      ]);

      // Remove coins after animation
      setTimeout(() => {
        setCoins((prevCoins) => prevCoins.slice(1));
      }, 2000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coin-animation-container">
      {/* Piggy Bank */}
      <img src={piggyBank} alt="Piggy Bank" className="piggy-bank" />

      {/* Falling Coins */}
      {coins.map((coin) => (
        <div key={coin.id} className="coin"> 🪙 </div>
      ))}
    </div>
  );
};

export default CoinAnimation;
