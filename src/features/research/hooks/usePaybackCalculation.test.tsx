/**
 * Тесты для хука usePaybackCalculation
 */

import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { usePaybackCalculation } from './usePaybackCalculation';

describe('usePaybackCalculation', () => {
  it('должен возвращать chartData', () => {
    const { result } = renderHook(() => usePaybackCalculation());
    
    expect(result.current.chartData).toBeDefined();
    expect(Array.isArray(result.current.chartData)).toBe(true);
    expect(result.current.chartData.length).toBeGreaterThan(0);
  });

  it('должен возвращать функцию getPayback', () => {
    const { result } = renderHook(() => usePaybackCalculation());
    
    expect(result.current.getPayback).toBeDefined();
    expect(typeof result.current.getPayback).toBe('function');
  });

  it('должен мемоизировать chartData (не пересчитывать при ререндерах)', () => {
    const { result, rerender } = renderHook(() => usePaybackCalculation());
    
    const firstChartData = result.current.chartData;
    rerender();
    const secondChartData = result.current.chartData;
    
    // Проверяем, что это тот же массив (мемоизация работает)
    expect(firstChartData).toBe(secondChartData);
  });

  it('должен возвращать корректные данные через getPayback', () => {
    const { result } = renderHook(() => usePaybackCalculation());
    
    const paybackResult = result.current.getPayback('moscow', 'it', 'bachelor');
    
    expect(paybackResult).not.toBeNull();
    expect(paybackResult?.totalCost).toBeGreaterThan(0);
    expect(paybackResult?.yearlyTax).toBeGreaterThan(0);
    expect(paybackResult?.paybackYears).toBeGreaterThan(0);
  });

  it('должен возвращать null через getPayback для несуществующих данных', () => {
    const { result } = renderHook(() => usePaybackCalculation());
    
    const paybackResult = result.current.getPayback('nonexistent', 'it', 'bachelor');
    expect(paybackResult).toBeNull();
  });

  it('должен возвращать корректные данные для всех регионов через getPayback', () => {
    const { result } = renderHook(() => usePaybackCalculation());
    const regions = ['moscow', 'spb', 'tver', 'tatarstan', 'sverdlovsk', 'novosibirsk', 'krasnodar'];
    
    regions.forEach(regionId => {
      const paybackResult = result.current.getPayback(regionId, 'it', 'bachelor');
      expect(paybackResult).not.toBeNull();
      expect(paybackResult?.totalCost).toBeGreaterThan(0);
    });
  });

  it('должен возвращать корректные данные для всех специальностей через getPayback', () => {
    const { result } = renderHook(() => usePaybackCalculation());
    const specialties = ['it', 'economics', 'law', 'medicine', 'pedagogy', 'engineering'];
    
    specialties.forEach(specialtyId => {
      const paybackResult = result.current.getPayback('moscow', specialtyId, 'bachelor');
      expect(paybackResult).not.toBeNull();
      expect(paybackResult?.totalCost).toBeGreaterThan(0);
    });
  });

  it('должен возвращать корректные данные для магистратуры через getPayback', () => {
    const { result } = renderHook(() => usePaybackCalculation());
    
    const paybackResult = result.current.getPayback('moscow', 'it', 'master');
    
    expect(paybackResult).not.toBeNull();
    expect(paybackResult?.totalCost).toBe(1160000); // 580000 * 2
  });

  it('должен возвращать chartData с корректной структурой', () => {
    const { result } = renderHook(() => usePaybackCalculation());
    
    const chartData = result.current.chartData;
    expect(chartData.length).toBe(7); // 7 регионов
    
    chartData.forEach(item => {
      expect(item).toHaveProperty('region');
      expect(item).toHaveProperty('regionId');
      expect(item).toHaveProperty('avgSalary');
      expect(item).toHaveProperty('itPayback');
      expect(item).toHaveProperty('economicsPayback');
      expect(item).toHaveProperty('lawPayback');
    });
  });
});

