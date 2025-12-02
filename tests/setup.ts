import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Расширяем expect с матчерами из jest-dom
expect.extend(matchers);

// Очистка после каждого теста
afterEach(() => {
  cleanup();
});

// Мок для ResizeObserver (требуется для Recharts)
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
} as any;

