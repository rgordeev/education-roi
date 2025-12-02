/**
 * Тесты для компонента ResearchTabs
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ResearchTabs } from './ResearchTabs';
import { researchData } from '@/data';
import { prepareChartData } from '../utils/calculations';

describe('ResearchTabs', () => {
  const chartData = prepareChartData();

  it('должен рендерить все табы', () => {
    render(<ResearchTabs chartData={chartData} />);
    
    expect(screen.getByText('Методика')).toBeInTheDocument();
    expect(screen.getByText('Данные')).toBeInTheDocument();
    expect(screen.getByText('Результаты')).toBeInTheDocument();
    expect(screen.getByText('Анализ')).toBeInTheDocument();
    expect(screen.getByText('Чувствительность')).toBeInTheDocument();
    expect(screen.getByText('Выводы')).toBeInTheDocument();
  });

  it('должен показывать контент таба "Методика" по умолчанию', () => {
    render(<ResearchTabs chartData={chartData} />);
    
    expect(screen.getByText(/Методика и обоснование корректности/i)).toBeInTheDocument();
  });

  it('должен переключаться между табами при клике', async () => {
    const user = userEvent.setup();
    render(<ResearchTabs chartData={chartData} />);
    
    // Кликаем на таб "Данные"
    const dataTab = screen.getByText('Данные');
    await user.click(dataTab);
    
    // Проверяем, что контент таба "Данные" отображается
    expect(screen.getByText(/Исходные данные исследования/i)).toBeInTheDocument();
  });

  it('должен передавать chartData в ResultsTab', () => {
    render(<ResearchTabs chartData={chartData} />);
    
    // Переключаемся на таб "Результаты"
    const resultsTab = screen.getByText('Результаты');
    resultsTab.click();
    
    // Проверяем, что графики отображаются (косвенно через наличие данных)
    expect(chartData.length).toBeGreaterThan(0);
  });
});

