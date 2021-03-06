import React from 'react'
import CoinItem from './CoinItem'
import "./Coins.css"
import {Link} from "react-router-dom"
import Coin from './Coin.js'

const Coins = (props) => {
  return (
    <div className='coins-container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24H</p>
                <p>Volume</p>
                <p>Market Cap</p>
            </div>
            {
                props.coins?.map(coins => {
                    return (
                        // <Link to={`/coin/${coins.id}`} element={<Coin />}  key={coins.id}>
                        //     <CoinItem coins={coins} />
                        // </Link>
                        <Link to={`/`} element={<Coin />}  key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Coins