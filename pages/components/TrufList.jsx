import React from 'react'

import Turf from './Truf'

import { BsArrowUpRight } from "react-icons/bs";

import { cardData } from '../utils/api';


const TrufList = () => {
    return (
        <div className='px-8 py-6'>
            <div className="flex justify-between items-center px-12">
                <h2 className="text-3xl font-bold text-left  mb-6">Turf Grounds In Your City's</h2>
                <p className='flex items-center font-bold'>View all <BsArrowUpRight /></p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {cardData.map((card) => (   
                    <Turf key={card.id} {...card} />
                ))}
            </div>
        </div>
    )
}

export default TrufList