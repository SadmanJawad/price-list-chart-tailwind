import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([])

    useEffect(()=> {
        fetch('prices.json')
        .then(res => res.json())
        .then(data =>setPrices(data))
    },[])

    return (
        <div className='mx-12'>
            <h2 className='text-4xl text-center text-purple-950 font-mono bg-purple-300 font-bold py-3'>Easy Affordable PriceList</h2>
            <div className='grid md:grid-cols-3 gap-3'>
            {
                prices.map(price => <PriceCard
                key={price.id}
                price={price}
                ></PriceCard> )
            }
            </div>
        </div>
    );
};

export default PriceList;