import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  test('renders button with provided class and children', () => {
    const className = 'custom-class';
    const buttonText = 'Click me';
    render(<Button className={className}>{buttonText}</Button>);
    const button = screen.getByRole('button', { name: buttonText });
    expect(button).toHaveClass(className);
    expect(button.textContent).toBe(buttonText);
  });

});
