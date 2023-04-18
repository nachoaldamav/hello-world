import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LandingPage } from '@greeters/hello-world.pages.landing-page';

export const HelloWorldApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>

  );
}
