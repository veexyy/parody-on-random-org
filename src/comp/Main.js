import React from "react";
import Header from "./Header";

function Main() {
  function random() {
    const divWithRandomNum = document.getElementById("number");
    let num = Math.floor(Math.random() * 101);
    divWithRandomNum.innerHTML = num;
  }

  return (
    <>
      <Header />
      <div className="main wrapper">
        <div className="main title">From 0 to 100</div>
        <div id="number">?</div>
        <button className="main button" onClick={random}>
          Press
        </button>
      </div>
    </>
  );
}

export default Main;
