import React, { FC } from 'react';

import icons from './icons';


const IconsStories:FC = () => (
  <div className='flex flex-wrap gap-5'>
    {Object.keys(icons).map(
      icon => {
        const Icon: React.ComponentType = icons[icon];
        return (
          <div key={icon} className='flex flex-col gap-2 justify-center items-center p-1.5 w-40 bg-primary-50'>
            <Icon />
            <small>{icon}</small>
          </div>
        );
      }
    )}
  </div>
);

export default IconsStories;
