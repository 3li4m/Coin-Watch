import React, {useEffect, useState} from 'react'
import axios from "axios"

const Coin = () => {
    const [coin, setCoin] = useState();
    const url = `https://api.coingecko.com/api/v3/coins/bitcoin`

    useEffect(() => {
        axios.get(url).then((res) => {
            setCoin(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
    <div>
        <h1>Hellow</h1>
    </div>
  )
}

export default Coin;