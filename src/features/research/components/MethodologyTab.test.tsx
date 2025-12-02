/**
 * Тесты для компонента MethodologyTab
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MethodologyTab } from './MethodologyTab';

describe('MethodologyTab', () => {
  it('должен рендерить заголовок таба', () => {
    render(<MethodologyTab />);
    
    expect(screen.getByText(/Методика и обоснование корректности/i)).toBeInTheDocument();
  });

  it('должен рендерить описание методики', () => {
    render(<MethodologyTab />);
    
    expect(screen.getByText(/Описание методики расчёта/i)).toBeInTheDocument();
  });

  it('должен рендерить формулу расчета', () => {
    render(<MethodologyTab />);
    
    // Проверяем наличие формулы (более специфичный текст)
    expect(screen.getByText(/Формула расчёта/i)).toBeInTheDocument();
  });

  it('должен рендерить обоснование значимости', () => {
    render(<MethodologyTab />);
    
    expect(screen.getByText(/Обоснование значимости и реалистичности/i)).toBeInTheDocument();
  });
});

