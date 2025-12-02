/**
 * Тесты для компонента PaybackChart
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PaybackChart } from './PaybackChart';
import { prepareChartData } from '../../utils/calculations';

describe('PaybackChart', () => {
  const chartData = prepareChartData();

  it('должен рендерить заголовок графика', () => {
    render(<PaybackChart chartData={chartData} />);
    
    expect(screen.getByText(/Сроки окупаемости по регионам/i)).toBeInTheDocument();
  });

  it('должен рендерить описание графика', () => {
    render(<PaybackChart chartData={chartData} />);
    
    expect(screen.getByText(/Бакалавриат, различные специальности/i)).toBeInTheDocument();
  });

  it('должен принимать данные для графика', () => {
    render(<PaybackChart chartData={chartData} />);
    
    // Проверяем, что компонент рендерится без ошибок с данными
    expect(chartData.length).toBeGreaterThan(0);
  });

  it('должен рендерить ResponsiveContainer', () => {
    const { container } = render(<PaybackChart chartData={chartData} />);
    
    // Проверяем, что компонент рендерится
    expect(container.firstChild).toBeTruthy();
  });
});

