import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ScrollReveal from './ScrollReveal.jsx';

let observeMock = vi.fn();
let unobserveMock = vi.fn();
let currentInstance = null;

beforeEach(() => {
  vi.clearAllMocks();
  currentInstance = null;

  window.IntersectionObserver = class {
    constructor(callback) {
      this.callback = callback;
      currentInstance = this;
    }
    observe = observeMock;
    unobserve = unobserveMock;
    disconnect = vi.fn();

    trigger(isIntersecting) {
      this.callback([{ isIntersecting, target: null }]);
    }
  };
});

describe('ScrollReveal Component', () => {
  it('renders children correctly', () => {
    render(
      <ScrollReveal animation="fade-up">
        <div data-testid="child-element">Test Content</div>
      </ScrollReveal>
    );

    expect(screen.getByTestId('child-element')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('initially applies hidden style opacity 0', () => {
    const { container } = render(
      <ScrollReveal animation="fade-up">
        <div>Content</div>
      </ScrollReveal>
    );

    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyle('opacity: 0');
    expect(wrapper).toHaveStyle('transform: translateY(40px)');
  });

  it('applies zoom-in hidden transforms correctly', () => {
    const { container } = render(
      <ScrollReveal animation="zoom-in">
        <div>Content</div>
      </ScrollReveal>
    );

    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyle('transform: scale(0.92)');
  });

  it('updates opacity to 1 and transform to none when intersecting', () => {
    const { container } = render(
      <ScrollReveal animation="fade-left">
        <div>Content</div>
      </ScrollReveal>
    );

    const wrapper = container.firstChild;

    expect(wrapper).toHaveStyle('opacity: 0');
    expect(wrapper).toHaveStyle('transform: translateX(40px)');

    // Trigger intersection
    act(() => {
      currentInstance.trigger(true);
    });

    expect(wrapper).toHaveStyle('opacity: 1');
    expect(wrapper).toHaveStyle('transform: none');
    expect(unobserveMock).toHaveBeenCalled();
  });
});
