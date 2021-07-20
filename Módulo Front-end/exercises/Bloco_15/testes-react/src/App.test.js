import { render, screen } from '@testing-library/react';
import App from './App';

describe('Testes na pagina principal', () => {

  test('Verifica se há um input com nome E-mail', () => {
    render (<App />);
    const nameElement = screen.getByText(/email/i);
    expect(nameElement).toBeInTheDocument();
  });

  test('Verificando se existe um botão de enviar', () => {
    render(<App />);
    const btn = screen.getByTestId('id-send');
    expect(btn).toBeInTheDocument();
    expect(btn.type).toBe('button');
    expect(btn).toHaveValue('Enviar');
  });

  test('Verificando se existe um botão de voltar', () => {
    render(<App />);
    const btn = screen.getByTestId('id-back');
    expect(btn).toBeInTheDocument();
    expect(btn.type).toBe('button');
    expect(btn).toHaveValue('Voltar');
  });

  test('Verificando se existe dois botões na tela', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
  });
});