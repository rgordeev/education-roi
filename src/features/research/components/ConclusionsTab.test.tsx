/**
 * Тесты для компонента ConclusionsTab
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ConclusionsTab } from './ConclusionsTab';

describe('ConclusionsTab', () => {
  it('должен рендерить заголовок таба', () => {
    render(<ConclusionsTab />);
    
    expect(screen.getByText(/Заключение и рекомендации/i)).toBeInTheDocument();
  });

  it('должен рендерить ключевые выводы', () => {
    render(<ConclusionsTab />);
    
    expect(screen.getByText(/Ключевые выводы/i)).toBeInTheDocument();
  });

  it('должен рендерить рекомендации', () => {
    render(<ConclusionsTab />);
    
    expect(screen.getByText(/Рекомендации для образовательной политики/i)).toBeInTheDocument();
  });

  it('должен рендерить источники данных', () => {
    render(<ConclusionsTab />);
    
    expect(screen.getByText(/Источники данных/i)).toBeInTheDocument();
  });
});

