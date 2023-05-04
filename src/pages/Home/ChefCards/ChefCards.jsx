import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const ChefCards = () => {
    const [chefCards, setChefCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/chefData')
            .then(res => res.json())
            .then(data => setChefCards(data))
            .catch(err => console.error(err))
    }, [])
    return (
        <div>
            <h2 className='mb-12 mt-4 text-4xl chef-title text-center'> Our <span className=''>Smart Chef </span> Chef</h2>
            <div className='px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    chefCards.map(item => <ChefCard
                        key={item.id}
                        item={item}
                    ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default ChefCards;