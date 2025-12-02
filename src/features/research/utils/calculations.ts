/**
 * Утилиты для расчетов экономической эффективности образования
 */

import type { Region, EducationLevel, EducationCosts, PaybackResult, ChartDataPoint } from '../types/research';
import { researchData, educationCosts } from '@/data';

/**
 * Рассчитывает срок окупаемости инвестиций в образование
 * @param regionId ID региона
 * @param specialtyId ID специальности
 * @param levelId ID уровня образования (bachelor/master)
 * @returns Результат расчета или null, если данные не найдены
 */
export function calculatePayback(
  regionId: string,
  specialtyId: string,
  levelId: string
): PaybackResult | null {
  const region = researchData.regions.find(r => r.id === regionId);
  const level = researchData.educationLevels.find(l => l.id === levelId);
  
  if (!region || !level) return null;

  const cost = educationCosts[regionId]?.[specialtyId]?.[levelId];
  if (!cost || cost === 0) return null;
  
  const totalCost = cost * level.duration;
  const yearlyTax = region.avgSalary * 12 * 0.13; // НДФЛ 13%
  const paybackYears = totalCost / yearlyTax;

  return {
    totalCost,
    yearlyTax,
    paybackYears: Math.round(paybackYears * 10) / 10
  };
}

/**
 * Подготавливает данные для графиков сроков окупаемости
 * @returns Массив данных для графиков
 */
export function prepareChartData(): ChartDataPoint[] {
  return researchData.regions.map(region => {
    const itBachelor = calculatePayback(region.id, 'it', 'bachelor');
    const economicsBachelor = calculatePayback(region.id, 'economics', 'bachelor');
    const lawBachelor = calculatePayback(region.id, 'law', 'bachelor');
    
    return {
      region: region.name,
      regionId: region.id,
      avgSalary: region.avgSalary,
      itPayback: itBachelor?.paybackYears || 0,
      economicsPayback: economicsBachelor?.paybackYears || 0,
      lawPayback: lawBachelor?.paybackYears || 0
    };
  });
}

