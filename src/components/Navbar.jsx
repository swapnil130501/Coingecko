import React from 'react';

function Navbar() {
    return (
        <nav className="bg-blue-400 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl">coingecko</div>
                <div className="flex space-x-4">
                    <span className="text-white">Menu 1</span>
                    <span className="text-white">Menu 2</span>
                    <span className="text-white">Menu 3</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
