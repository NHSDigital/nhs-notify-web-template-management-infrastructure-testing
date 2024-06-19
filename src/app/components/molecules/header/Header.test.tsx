import { render, screen } from '@testing-library/react';
import { NHSNotifyHeader } from './header';

describe('Header component', () => {
  it('renders component correctly', () => {
    render(<NHSNotifyHeader />);

    expect(screen.getByTestId('page-header')).toBeInTheDocument();
    expect(screen.getByTestId('page-header-logo')).toBeInTheDocument();
    expect(screen.getByTestId('login-link')).toBeInTheDocument();
  });
});
