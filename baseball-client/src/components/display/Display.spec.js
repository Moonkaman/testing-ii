import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => { 
  it('displays "No Game Info" if none is provided', () => {
    const { getByText } = render(<Display />);
    expect(getByText(/no game info/i)).toBeInTheDocument();
  })

  it('displays strikes', () => {
    const { getByText } = render(<Display gameInfo={{ball: 0, strike: 0}} />);
    expect(getByText(/strikes/i)).toBeInTheDocument();
  })

  it('displays balls', () => {
    const { getByText } = render(<Display gameInfo={{ball: 0, strike: 0}} />);
    expect(getByText(/ball/i)).toBeInTheDocument();
  });
});

