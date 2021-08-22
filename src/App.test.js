import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Taskbox', () => {
  render(<App />);
  const taskboxElement = screen.getByText(/Taskbox/i);
  expect(taskboxElement).toBeInTheDocument();
});
