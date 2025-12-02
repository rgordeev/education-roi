/**
 * Интеграционные тесты для компонента ResearchPage
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ResearchPage } from './ResearchPage';

describe('ResearchPage', () => {
  it('должен рендерить полную страницу исследования', () => {
    render(<ResearchPage />);
    
    // Проверяем наличие основных элементов
    expect(screen.getByText(/Экономическая эффективность высшего образования в России/i)).toBeInTheDocument();
    expect(screen.getByText(/Гордеев Роман Николаевич/i)).toBeInTheDocument();
  });

  it('должен рендерить все табы', () => {
    render(<ResearchPage />);
    
    expect(screen.getByText('Методика')).toBeInTheDocument();
    expect(screen.getByText('Данные')).toBeInTheDocument();
    expect(screen.getByText('Результаты')).toBeInTheDocument();
    expect(screen.getByText('Анализ')).toBeInTheDocument();
    expect(screen.getByText('Чувствительность')).toBeInTheDocument();
    expect(screen.getByText('Выводы')).toBeInTheDocument();
  });

  it('должен рендерить KPI карточки', () => {
    render(<ResearchPage />);
    
    // Проверяем наличие KPI данных
    expect(screen.getByText(/Средняя стоимость обучения/i)).toBeInTheDocument();
    expect(screen.getByText(/Средняя зарплата по РФ/i)).toBeInTheDocument();
  });

  it('должен содержать JSON данные для экспорта', () => {
    const { container } = render(<ResearchPage />);
    
    // Проверяем наличие script тега с данными
    const scriptTag = container.querySelector('script#dataset-main');
    expect(scriptTag).toBeInTheDocument();
    expect(scriptTag?.getAttribute('type')).toBe('application/json');
  });
});

