import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Loader from './Loader.jsx';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => {
      const translations = {
        'loading.message': 'Preparing your next adventure...',
      };
      return translations[key] || key;
    },
  }),
}));

describe('Loader Component', () => {
  it('renders the loading message when show is true', () => {
    render(<Loader show={true} />);
    expect(screen.getByText('Preparing your next adventure...')).toBeInTheDocument();
  });

  it('applies opacity-100 when show is true', () => {
    const { container } = render(<Loader show={true} />);
    const loaderContainer = container.firstChild;
    expect(loaderContainer).toHaveClass('opacity-100');
    expect(loaderContainer).not.toHaveClass('opacity-0');
    expect(loaderContainer).not.toHaveClass('pointer-events-none');
  });

  it('applies opacity-0 and pointer-events-none when show is false', () => {
    const { container } = render(<Loader show={false} />);
    const loaderContainer = container.firstChild;
    expect(loaderContainer).toHaveClass('opacity-0');
    expect(loaderContainer).toHaveClass('pointer-events-none');
    expect(loaderContainer).not.toHaveClass('opacity-100');
  });
});
