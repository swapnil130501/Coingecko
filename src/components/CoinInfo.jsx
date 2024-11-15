import { useEffect } from "react";
import { fetchCoinData } from "../services/fetchCoinData";

function CoinInfo() {
    
    useEffect(() => {
        fetchCoinData();
    }, [])

    return (
        <>
            coin info
        </>
    )
}

export default CoinInfo;