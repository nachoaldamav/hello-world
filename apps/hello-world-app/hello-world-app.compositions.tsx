import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { HelloWorldApp } from './app';

export const HelloWorldAppBasic = () => {
  return (
    <MemoryRouter>
      <HelloWorldApp />
    </MemoryRouter>
  );
};
