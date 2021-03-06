import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

describe('<App />', () => {
  it('increments ball count by 1', () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('ball-btn');
    const ballDisplayText = getByTestId('ball-display');
    
    fireEvent.click(button);
    expect(ballDisplayText).toHaveTextContent('Balls: 1');
    
    fireEvent.click(button);
    expect(ballDisplayText).toHaveTextContent('Balls: 2');
    
    fireEvent.click(button);
    expect(ballDisplayText).toHaveTextContent('Balls: 3');
    
    fireEvent.click(button);
    expect(ballDisplayText).toHaveTextContent('Balls: 0');
  })
  
  it('increments strike count by 1', () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('strike-btn');
    const strikeDisplayText = getByTestId('strike-display');
    
    fireEvent.click(button);
    expect(strikeDisplayText).toHaveTextContent('Strikes: 1');
    
    fireEvent.click(button);
    expect(strikeDisplayText).toHaveTextContent('Strikes: 2');
    
    fireEvent.click(button);
    expect(strikeDisplayText).toHaveTextContent('Strikes: 0');
  })
  
  it('increments strike by 1 on foul unless strikes === 2', () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('foul-btn');
    const strikeDisplayText = getByTestId('strike-display');
    
    fireEvent.click(button);
    expect(strikeDisplayText).toHaveTextContent('Strikes: 1');
    
    fireEvent.click(button);
    expect(strikeDisplayText).toHaveTextContent('Strikes: 2');
    
    fireEvent.click(button);
    expect(strikeDisplayText).toHaveTextContent('Strikes: 2');
  })
  
  it('resets balls and strikes on hit', () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('hit-btn');
    const strikeBtn = getByTestId('strike-btn');
    const strikeDisplayText = getByTestId('strike-display');
    const ballDisplayText = getByTestId('ball-display');
    
    fireEvent.click(strikeBtn);
    fireEvent.click(button);
    expect(strikeDisplayText).toHaveTextContent('Strikes: 0');
    expect(ballDisplayText).toHaveTextContent('Balls: 0');
  })
}) 
  