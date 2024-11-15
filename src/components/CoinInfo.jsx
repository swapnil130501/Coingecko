import { useEffect, useState } from "react";
import { fetchCoinData } from "../services/fetchCoinData";
import { useQuery } from "react-query";

function CoinInfo() {

    const [page, setPage] = useState(1);
    const {data, isLoading, isError, error} = useQuery(['coins', page], () => fetchCoinData(page, 'usd'), {
        //retry: 2,
        cacheTime: 1000 * 60 * 5,
    });

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>Error: {error.message}</div>
    }

    return (
        {data} && <div className="bg-gradient-to-r from-blue-600 to-green-400 p-6 text-white">
            <div className="text-xl font-bold mb-2">
                {data.map((coin) => {
                    return (
                        <div key = {coin.id}> {coin.name} </div>
                    )
                })}
            </div>
        </div>
    );
}

export default CoinInfo;