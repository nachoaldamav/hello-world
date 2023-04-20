import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LandingPage } from '@greetings/hello-world.pages.landing-page';

export const HelloWorldApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>

  );
}
