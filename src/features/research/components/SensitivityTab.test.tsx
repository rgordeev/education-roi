/**
 * Тесты для компонента SensitivityTab
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SensitivityTab } from './SensitivityTab';

describe('SensitivityTab', () => {
  it('должен рендерить заголовок таба', () => {
    render(<SensitivityTab />);
    
    expect(screen.getByText(/Чувствительный анализ и ограничения/i)).toBeInTheDocument();
  });

  it('должен рендерить сценарный анализ', () => {
    render(<SensitivityTab />);
    
    expect(screen.getByText(/Сценарный анализ/i)).toBeInTheDocument();
  });

  it('должен рендерить ограничения исследования', () => {
    render(<SensitivityTab />);
    
    expect(screen.getByText(/Ограничения исследования/i)).toBeInTheDocument();
  });
});

