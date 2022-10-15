import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(() => render(<App />));

describe('initial elements render', () => {
  test('there must be a header',() => {
    expect(screen.getByRole('heading', {level: 1} )).toBeInTheDocument();
    expect(screen.getByText(/contador/i)).toBeInTheDocument();
  });
  
  test('the counter must start at zero', () => {
    expect(screen.getByText(0)).toBeInTheDocument();
  });
  
  test('there should be five buttons', () => {
    expect(screen.getAllByRole('button'));
  });
});

describe('buttons function', () => {
  test('when press aumentar, the counter must add 1', () => {
    const contador = screen.queryByTestId('contador');
    const btnAumentar = screen.getByTestId('aumentar');
    const expectedResult = "1";

    fireEvent.click(btnAumentar); 
    expect(contador.textContent).toEqual(expectedResult);
  });
  
  test('when press disminuir, the counter must substract 1', () => {
    const contador = screen.queryByTestId('contador');
    const btnDisminuir = screen.getByTestId('disminuir');
    const expectedResult = "-1";
    
    fireEvent.click(btnDisminuir);
    expect(contador.textContent).toEqual(expectedResult);
  });

  test('when press sumar10, the counter must add 10', () => {
    const contador = screen.queryByTestId('contador');
    const btnSumar10 = screen.getByTestId('sumar10');
    const expectedResult = "10";

    fireEvent.click(btnSumar10);
    expect(contador.textContent).toEqual(expectedResult);
  }); 
  
  test('when press porDos, the counter must multiplicate for 2', () => {
    const contador = screen.queryByTestId('contador');
    const btnAumentar = screen.getByTestId('aumentar');
    const btnPorDos = screen.getByTestId('porDos');
    const expectedResult = "4";

    fireEvent.click(btnAumentar);
    fireEvent.click(btnAumentar);
    fireEvent.click(btnPorDos);
    expect(contador.textContent).toEqual(expectedResult);
  }); 
  
  test('when press reset, the counter must be reset', () => {
    const contador = screen.queryByTestId('contador');
    const btnAumentar = screen.getByTestId('aumentar');
    const btnReset = screen.getByTestId('reset');
    const expectedResult = "0";
    fireEvent.click(btnAumentar);
    fireEvent.click(btnReset);
    expect(contador.textContent).toEqual(expectedResult);
  });
});