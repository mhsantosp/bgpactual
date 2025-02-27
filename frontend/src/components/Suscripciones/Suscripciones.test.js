import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Suscripciones from './Suscripciones';

describe('<Suscripciones />', () => {
  test('it should mount', () => {
    render(<Suscripciones />);

    const suscripciones = screen.getByTestId('Suscripciones');

    expect(suscripciones).toBeInTheDocument();
  });
});