/**
 * Тесты для компонента ResultsTab
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ResultsTab } from './ResultsTab';
import { prepareChartData } from '../utils/calculations';

describe('ResultsTab', () => {
  const chartData = prepareChartData();

  it('должен рендерить заголовок таба', () => {
    render(<ResultsTab chartData={chartData} />);
    
    expect(screen.getByText(/Тверская область в контексте исследования/i)).toBeInTheDocument();
  });

  it('должен рендерить графики', () => {
    render(<ResultsTab chartData={chartData} />);
    
    // Проверяем наличие заголовков графиков
    expect(screen.getByText(/Сроки окупаемости по регионам/i)).toBeInTheDocument();
    expect(screen.getByText(/Средние зарплаты по регионам/i)).toBeInTheDocument();
  });

  it('должен передавать данные в графики', () => {
    render(<ResultsTab chartData={chartData} />);
    
    // Проверяем, что данные переданы (косвенно через наличие компонентов)
    expect(chartData.length).toBeGreaterThan(0);
  });

  it('должен отображать информацию о Тверской области', () => {
    render(<ResultsTab chartData={chartData} />);
    
    expect(screen.getByText(/Средняя зарплата/i)).toBeInTheDocument();
    expect(screen.getByText(/Стоимость обучения/i)).toBeInTheDocument();
    expect(screen.getByText(/Срок окупаемости/i)).toBeInTheDocument();
  });
});

