import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';


const Benefit = ({benefit}) => {
    return (
        <div className='flex items-center'>
                  <CheckCircleIcon className="h-6 w-6 text-purple-600" />
            <span className='pl-3 py-1'>{benefit}</span>
        </div>
    );
};

export default Benefit;