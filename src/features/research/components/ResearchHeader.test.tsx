/**
 * Тесты для компонента ResearchHeader
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ResearchHeader } from './ResearchHeader';
import { kpiData } from '@/data';

describe('ResearchHeader', () => {
  it('должен рендерить заголовок исследования', () => {
    render(<ResearchHeader kpiData={kpiData} />);
    
    expect(screen.getByText(/Экономическая эффективность высшего образования в России/i)).toBeInTheDocument();
  });

  it('должен рендерить описание исследования', () => {
    render(<ResearchHeader kpiData={kpiData} />);
    
    expect(screen.getByText(/Анализ стоимости подготовки специалистов/i)).toBeInTheDocument();
  });

  it('должен рендерить информацию об авторе', () => {
    render(<ResearchHeader kpiData={kpiData} />);
    
    expect(screen.getByText(/Гордеев Роман Николаевич/i)).toBeInTheDocument();
  });

  it('должен рендерить все KPI карточки', () => {
    render(<ResearchHeader kpiData={kpiData} />);
    
    kpiData.forEach(kpi => {
      expect(screen.getByText(kpi.value)).toBeInTheDocument();
      expect(screen.getByText(kpi.title)).toBeInTheDocument();
      expect(screen.getByText(kpi.subtitle)).toBeInTheDocument();
    });
  });

  it('должен рендерить корректное количество KPI карточек', () => {
    render(<ResearchHeader kpiData={kpiData} />);
    
    const kpiCards = screen.getAllByText(/₽|лет|Регионов/i);
    expect(kpiCards.length).toBeGreaterThanOrEqual(kpiData.length);
  });
});

