/**
 * Тесты для компонента AnalysisTab
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AnalysisTab } from './AnalysisTab';

describe('AnalysisTab', () => {
  it('должен рендерить заголовок таба', () => {
    render(<AnalysisTab />);
    
    expect(screen.getByText(/Анализ и интерпретация результатов/i)).toBeInTheDocument();
  });

  it('должен рендерить раздел о различиях по регионам', () => {
    render(<AnalysisTab />);
    
    expect(screen.getByText(/Различия по регионам/i)).toBeInTheDocument();
  });

  it('должен рендерить раздел о различиях по специальностям', () => {
    render(<AnalysisTab />);
    
    expect(screen.getByText(/Различия по специальностям/i)).toBeInTheDocument();
  });
});

