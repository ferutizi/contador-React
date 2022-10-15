import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */
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
})

describe('buttons function', () => {
  //Falta fireEvents
  test('when press aumentar, the counter must add 1', () => {
    const btnAumentar = screen.getByTestId('aumentar');
  
    expect(btnAumentar).toBeInTheDocument();
  }); 
  
  test('when press disminuir, the counter must substract 1', () => {
    const btnDisminuir = screen.getByTestId('disminuir');
  
    expect(btnDisminuir).toBeInTheDocument();
  }); 
  
  test('when press sumar10, the counter must add 10', () => {
    const btnSumar10 = screen.getByTestId('sumar10');
  
    expect(btnSumar10).toBeInTheDocument();
  }); 
  
  test('when press porDos, the counter must multiplicate for 2', () => {
    const btnPorDos = screen.getByTestId('porDos');
  
    expect(btnPorDos).toBeInTheDocument();
  }); 
  
  test('when press reset, the counter must be reset', () => {
    const btnReset = screen.getByTestId('reset');
  
    expect(btnReset).toBeInTheDocument();
  }); 
})