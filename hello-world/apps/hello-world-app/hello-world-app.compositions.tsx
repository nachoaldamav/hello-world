import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { HelloWorldAppApp } from './app';

export const HelloWorldAppBasic = () => {
  return (
    <MemoryRouter>
      <HelloWorldAppApp />
    </MemoryRouter>
  );
};
