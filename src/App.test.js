import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/ui/3d/GlobalBackground', () => () => (
  <div data-testid="global-background" />
));

beforeEach(() => {
  window.history.pushState({}, '', '/');
});

test('renders the home route', async () => {
  render(<App />);

  expect(await screen.findByRole('heading', {
    name: /Keynsham Reformer Pilates Studio/i,
  })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Pricing/i })).toHaveAttribute('href', '/pricing-bookings');
});

test('renders the pricing route directly', async () => {
  window.history.pushState({}, '', '/pricing-bookings');

  render(<App />);

  expect(await screen.findByRole('heading', {
    name: /Invest in Yourself/i,
  })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /Book Online/i })).toHaveLength(2);
});
