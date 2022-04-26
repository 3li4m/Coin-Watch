import { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./Components/Coins.js";
import Navbar from "./Components/NavigationBar";
import { Routes, Route } from 'react-router-dom';
import Coin from "./Components/Coin.js";

function App() {
  const [coins, setCoins] = useState();
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=25&page=1&sparkline=false`

  useEffect(() => {
    axios.get(url).then((response) =>{
      setCoins(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins}/>} />

        {/* <Route path="/coin" element={<Coin />}> </Route>
        <Route path=":coinId" element={<Coin />}/> */}
      </Routes> 
    </div>
  );
}

export default App;
