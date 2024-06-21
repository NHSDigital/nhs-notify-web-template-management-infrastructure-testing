import { render, screen } from '@testing-library/react';
import {
  Personalisation,
  PersonalisationType,
} from '@/src/components/molecules/Personalisation/Personalisation';

const componentProps: PersonalisationType = {
  isOpen: true,
};

describe('Personalisation component', () => {
  it('renders component correctly', async () => {
    render(<Personalisation />);

    expect(screen.getByTestId('personalisation-header')).toBeInTheDocument();

    const details = screen.getByTestId('personalisation-details');
    expect(details).toBeInTheDocument();
    expect(details).not.toHaveAttribute('open');
  });
  it('renders component in open state', async () => {
    render(<Personalisation {...componentProps} />);

    expect(screen.getByTestId('personalisation-header')).toBeInTheDocument();

    const details = screen.getByTestId('personalisation-details');
    expect(details).toBeInTheDocument();
    expect(details).toHaveAttribute('open');
  });
});
