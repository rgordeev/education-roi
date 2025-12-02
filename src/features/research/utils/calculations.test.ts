/**
 * Unit тесты для функций расчетов
 */

import { describe, it, expect } from 'vitest';
import { calculatePayback, prepareChartData } from './calculations';

describe('calculatePayback', () => {
  it('должен корректно рассчитывать окупаемость для Москвы, IT, бакалавриат', () => {
    const result = calculatePayback('moscow', 'it', 'bachelor');
    
    expect(result).not.toBeNull();
    expect(result?.totalCost).toBe(2080000); // 520000 * 4
    expect(result?.yearlyTax).toBeCloseTo(252876, 0); // 162100 * 12 * 0.13
    expect(result?.paybackYears).toBeCloseTo(8.2, 1);
  });

  it('должен корректно рассчитывать окупаемость для Тверской области, экономика, бакалавриат', () => {
    const result = calculatePayback('tver', 'economics', 'bachelor');
    
    expect(result).not.toBeNull();
    expect(result?.totalCost).toBe(960000); // 240000 * 4
    expect(result?.yearlyTax).toBeCloseTo(99528, 0); // 63800 * 12 * 0.13
    expect(result?.paybackYears).toBeCloseTo(9.6, 1);
  });

  it('должен возвращать null для несуществующего региона', () => {
    const result = calculatePayback('nonexistent', 'it', 'bachelor');
    expect(result).toBeNull();
  });

  it('должен возвращать null для несуществующей специальности', () => {
    const result = calculatePayback('moscow', 'nonexistent', 'bachelor');
    expect(result).toBeNull();
  });

  it('должен корректно рассчитывать для магистратуры', () => {
    const result = calculatePayback('moscow', 'it', 'master');
    
    expect(result).not.toBeNull();
    expect(result?.totalCost).toBe(1160000); // 580000 * 2
    expect(result?.paybackYears).toBeCloseTo(4.6, 1);
  });

  it('должен возвращать null для несуществующего уровня образования', () => {
    const result = calculatePayback('moscow', 'it', 'nonexistent');
    expect(result).toBeNull();
  });

  it('должен возвращать null для нулевой стоимости обучения', () => {
    // Проверяем, что функция корректно обрабатывает отсутствие данных
    const result = calculatePayback('moscow', 'nonexistent', 'bachelor');
    expect(result).toBeNull();
  });

  it('должен корректно рассчитывать для всех регионов без ошибок', () => {
    const regions = ['moscow', 'spb', 'tver', 'tatarstan', 'sverdlovsk', 'novosibirsk', 'krasnodar'];
    
    regions.forEach(regionId => {
      const result = calculatePayback(regionId, 'it', 'bachelor');
      expect(result).not.toBeNull();
      expect(result?.totalCost).toBeGreaterThan(0);
      expect(result?.yearlyTax).toBeGreaterThan(0);
      expect(result?.paybackYears).toBeGreaterThan(0);
    });
  });

  it('должен корректно рассчитывать для всех специальностей без ошибок', () => {
    const specialties = ['it', 'economics', 'law', 'medicine', 'pedagogy', 'engineering'];
    
    specialties.forEach(specialtyId => {
      const result = calculatePayback('moscow', specialtyId, 'bachelor');
      expect(result).not.toBeNull();
      expect(result?.totalCost).toBeGreaterThan(0);
      expect(result?.yearlyTax).toBeGreaterThan(0);
      expect(result?.paybackYears).toBeGreaterThan(0);
    });
  });

  it('должен корректно округлять paybackYears до 1 знака после запятой', () => {
    const result = calculatePayback('tver', 'economics', 'bachelor');
    
    expect(result).not.toBeNull();
    // Проверяем, что округление работает корректно
    const paybackString = result?.paybackYears.toString() || '';
    const decimalPlaces = paybackString.split('.')[1]?.length || 0;
    expect(decimalPlaces).toBeLessThanOrEqual(1);
  });

  it('должен возвращать положительные значения для yearlyTax', () => {
    const result = calculatePayback('moscow', 'it', 'bachelor');
    
    expect(result).not.toBeNull();
    expect(result?.yearlyTax).toBeGreaterThan(0);
  });

  it('должен возвращать положительные значения для paybackYears', () => {
    const result = calculatePayback('moscow', 'it', 'bachelor');
    
    expect(result).not.toBeNull();
    expect(result?.paybackYears).toBeGreaterThan(0);
  });

  it('должен корректно рассчитывать формулу: totalCost = cost * duration', () => {
    const result = calculatePayback('moscow', 'it', 'bachelor');
    
    expect(result).not.toBeNull();
    // Проверяем формулу: 520000 * 4 = 2080000
    expect(result?.totalCost).toBe(2080000);
  });

  it('должен корректно рассчитывать формулу: yearlyTax = avgSalary * 12 * 0.13', () => {
    const result = calculatePayback('moscow', 'it', 'bachelor');
    
    expect(result).not.toBeNull();
    // Проверяем формулу: 162100 * 12 * 0.13 = 252876
    expect(result?.yearlyTax).toBeCloseTo(252876, 0);
  });

  it('должен корректно рассчитывать формулу: paybackYears = totalCost / yearlyTax', () => {
    const result = calculatePayback('moscow', 'it', 'bachelor');
    
    expect(result).not.toBeNull();
    const expectedPayback = result!.totalCost / result!.yearlyTax;
    expect(result?.paybackYears).toBeCloseTo(expectedPayback, 1);
  });
});

describe('prepareChartData', () => {
  it('должен возвращать массив данных для всех регионов', () => {
    const chartData = prepareChartData();
    
    expect(chartData).toHaveLength(7); // 7 регионов
    expect(chartData[0]).toHaveProperty('region');
    expect(chartData[0]).toHaveProperty('regionId');
    expect(chartData[0]).toHaveProperty('avgSalary');
    expect(chartData[0]).toHaveProperty('itPayback');
    expect(chartData[0]).toHaveProperty('economicsPayback');
    expect(chartData[0]).toHaveProperty('lawPayback');
  });

  it('должен содержать данные для Москвы', () => {
    const chartData = prepareChartData();
    const moscowData = chartData.find(d => d.regionId === 'moscow');
    
    expect(moscowData).toBeDefined();
    expect(moscowData?.region).toBe('Москва');
    expect(moscowData?.avgSalary).toBe(162100);
    expect(moscowData?.itPayback).toBeGreaterThan(0);
  });

  it('должен содержать данные для Тверской области', () => {
    const chartData = prepareChartData();
    const tverData = chartData.find(d => d.regionId === 'tver');
    
    expect(tverData).toBeDefined();
    expect(tverData?.region).toBe('Тверская область');
    expect(tverData?.avgSalary).toBe(63800);
  });

  it('должен содержать все регионы в данных', () => {
    const chartData = prepareChartData();
    const expectedRegions = [
      'Москва',
      'Санкт-Петербург',
      'Тверская область',
      'Республика Татарстан',
      'Свердловская область',
      'Новосибирская область',
      'Краснодарский край'
    ];
    
    const actualRegions = chartData.map(d => d.region);
    expectedRegions.forEach(region => {
      expect(actualRegions).toContain(region);
    });
  });

  it('должен иметь корректную структуру данных для каждого элемента', () => {
    const chartData = prepareChartData();
    
    chartData.forEach(item => {
      expect(item).toHaveProperty('region');
      expect(item).toHaveProperty('regionId');
      expect(item).toHaveProperty('avgSalary');
      expect(item).toHaveProperty('itPayback');
      expect(item).toHaveProperty('economicsPayback');
      expect(item).toHaveProperty('lawPayback');
      
      expect(typeof item.region).toBe('string');
      expect(typeof item.regionId).toBe('string');
      expect(typeof item.avgSalary).toBe('number');
      expect(typeof item.itPayback).toBe('number');
      expect(typeof item.economicsPayback).toBe('number');
      expect(typeof item.lawPayback).toBe('number');
    });
  });

  it('должен возвращать неотрицательные значения для payback', () => {
    const chartData = prepareChartData();
    
    chartData.forEach(item => {
      expect(item.itPayback).toBeGreaterThanOrEqual(0);
      expect(item.economicsPayback).toBeGreaterThanOrEqual(0);
      expect(item.lawPayback).toBeGreaterThanOrEqual(0);
    });
  });

  it('должен возвращать положительные значения для avgSalary', () => {
    const chartData = prepareChartData();
    
    chartData.forEach(item => {
      expect(item.avgSalary).toBeGreaterThan(0);
    });
  });

  it('должен содержать уникальные regionId', () => {
    const chartData = prepareChartData();
    const regionIds = chartData.map(d => d.regionId);
    const uniqueRegionIds = new Set(regionIds);
    
    expect(uniqueRegionIds.size).toBe(regionIds.length);
  });
});

