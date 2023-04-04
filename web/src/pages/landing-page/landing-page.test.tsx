import { render, screen } from '@testing-library/react';
import { LandingPage } from './landing-page';

describe('LandingPage', () => {
  test('displays Load Data button', async () => {
    render(<LandingPage />);
    // After viewing the page you should find a Load Data button
    expect(await screen.findByText('Load Data')).toBeInTheDocument();
  });
});
