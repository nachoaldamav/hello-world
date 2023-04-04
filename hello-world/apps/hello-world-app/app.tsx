
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '@greeters/hello-world.pages.landing-page';

export function HelloWorldApp() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
