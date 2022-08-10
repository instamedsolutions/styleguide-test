import React, { FC, useContext } from 'react';
import { DocsContext } from '@storybook/addon-docs/blocks';

export const Rest:FC = () => {
  const context = useContext(DocsContext);

  const isRest = context.parameters.docs.instamed?.badges;

  if (!isRest) {
    return null;
  }

  return (
    <div
      style={{
        border: '1px solid rgba(167, 130, 238)',
        borderRadius: '3px',
        color: '#9f74ce',
        fontWeight: 'bold',
        padding: '4px',
        fontSize: '15px',
        textAlign: 'center',
      }}
    >
      <span role='img' aria-label='boring'>😴</span>
      <span>Supports Rest Props</span>
    </div>
  );
};

export default Rest;
