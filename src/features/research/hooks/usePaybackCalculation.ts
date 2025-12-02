/**
 * Хук для работы с расчетами окупаемости
 */

import { useMemo } from 'react';
import { calculatePayback, prepareChartData } from '../utils/calculations';
import type { PaybackResult, ChartDataPoint } from '../types/research';

/**
 * Хук для получения результатов расчетов окупаемости
 */
export function usePaybackCalculation() {
  const chartData = useMemo(() => prepareChartData(), []);

  const getPayback = (regionId: string, specialtyId: string, levelId: string): PaybackResult | null => {
    return calculatePayback(regionId, specialtyId, levelId);
  };

  return {
    chartData,
    getPayback,
  };
}

