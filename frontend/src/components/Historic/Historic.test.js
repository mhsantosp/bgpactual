import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Historic from './Historic';

describe('<Historic />', () => {
  test('it should mount', () => {
    render(<Historic />);

    const historic = screen.getByTestId('Historic');

    expect(historic).toBeInTheDocument();
  });
});