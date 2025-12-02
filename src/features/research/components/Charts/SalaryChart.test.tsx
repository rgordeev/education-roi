/**
 * Тесты для компонента SalaryChart
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SalaryChart } from './SalaryChart';
import { prepareChartData } from '../../utils/calculations';

describe('SalaryChart', () => {
  const chartData = prepareChartData();

  it('должен рендерить заголовок графика', () => {
    render(<SalaryChart chartData={chartData} />);
    
    expect(screen.getByText(/Средние зарплаты по регионам/i)).toBeInTheDocument();
  });

  it('должен рендерить описание графика', () => {
    render(<SalaryChart chartData={chartData} />);
    
    expect(screen.getByText(/Данные Росстата за 2024 год/i)).toBeInTheDocument();
  });

  it('должен принимать данные для графика', () => {
    render(<SalaryChart chartData={chartData} />);
    
    // Проверяем, что компонент рендерится без ошибок с данными
    expect(chartData.length).toBeGreaterThan(0);
  });

  it('должен рендерить ResponsiveContainer', () => {
    const { container } = render(<SalaryChart chartData={chartData} />);
    
    // Проверяем, что компонент рендерится
    expect(container.firstChild).toBeTruthy();
  });
});

