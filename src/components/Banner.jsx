import React from 'react';

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-green-400 p-6 text-white">
        <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-2">Welcome to CoinGecko</h1>
            <p className="text-lg">Track your favorite cryptocurrencies and stay updated with real-time market data.</p>
        </div>
        </div>
    );
};

export default Banner;
