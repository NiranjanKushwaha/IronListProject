import React, { useState } from "react";
import Heading from "./Components/Heading";
import CurrencyContext from "./Components/CurrencyContext";
// import Main from "./Components/Main";
import MainRender from "./Components/MainRender";
function App() {
  const [currencyName, setCurrencyName] = useState("INR");
  return (
    <>
      <CurrencyContext.Provider value={[currencyName, setCurrencyName]}>
        <Heading />
        <MainRender />
      </CurrencyContext.Provider>
    </>
  );
}

export default App;
