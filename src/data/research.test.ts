/**
 * Тесты для валидации структуры данных исследования
 */

import { describe, it, expect } from 'vitest';
import { researchData, educationCosts, kpiData } from './research';

describe('researchData', () => {
  describe('regions', () => {
    it('должен содержать массив регионов', () => {
      expect(Array.isArray(researchData.regions)).toBe(true);
      expect(researchData.regions.length).toBeGreaterThan(0);
    });

    it('должен содержать все регионы с обязательными полями', () => {
      researchData.regions.forEach(region => {
        expect(region).toHaveProperty('id');
        expect(region).toHaveProperty('name');
        expect(region).toHaveProperty('avgSalary');
        expect(region).toHaveProperty('population');
        
        expect(typeof region.id).toBe('string');
        expect(typeof region.name).toBe('string');
        expect(typeof region.avgSalary).toBe('number');
        expect(typeof region.population).toBe('number');
      });
    });

    it('должен содержать положительные значения зарплат', () => {
      researchData.regions.forEach(region => {
        expect(region.avgSalary).toBeGreaterThan(0);
      });
    });

    it('должен содержать положительные значения населения', () => {
      researchData.regions.forEach(region => {
        expect(region.population).toBeGreaterThan(0);
      });
    });

    it('должен содержать уникальные ID регионов', () => {
      const regionIds = researchData.regions.map(r => r.id);
      const uniqueIds = new Set(regionIds);
      expect(uniqueIds.size).toBe(regionIds.length);
    });
  });

  describe('specialties', () => {
    it('должен содержать массив специальностей', () => {
      expect(Array.isArray(researchData.specialties)).toBe(true);
      expect(researchData.specialties.length).toBeGreaterThan(0);
    });

    it('должен содержать все специальности с обязательными полями', () => {
      researchData.specialties.forEach(specialty => {
        expect(specialty).toHaveProperty('id');
        expect(specialty).toHaveProperty('name');
        expect(specialty).toHaveProperty('sector');
        
        expect(typeof specialty.id).toBe('string');
        expect(typeof specialty.name).toBe('string');
        expect(typeof specialty.sector).toBe('string');
      });
    });

    it('должен содержать уникальные ID специальностей', () => {
      const specialtyIds = researchData.specialties.map(s => s.id);
      const uniqueIds = new Set(specialtyIds);
      expect(uniqueIds.size).toBe(specialtyIds.length);
    });
  });

  describe('educationLevels', () => {
    it('должен содержать массив уровней образования', () => {
      expect(Array.isArray(researchData.educationLevels)).toBe(true);
      expect(researchData.educationLevels.length).toBeGreaterThan(0);
    });

    it('должен содержать все уровни с обязательными полями', () => {
      researchData.educationLevels.forEach(level => {
        expect(level).toHaveProperty('id');
        expect(level).toHaveProperty('name');
        expect(level).toHaveProperty('duration');
        
        expect(typeof level.id).toBe('string');
        expect(typeof level.name).toBe('string');
        expect(typeof level.duration).toBe('number');
      });
    });

    it('должен содержать положительные значения продолжительности', () => {
      researchData.educationLevels.forEach(level => {
        expect(level.duration).toBeGreaterThan(0);
      });
    });
  });
});

describe('educationCosts', () => {
  it('должен содержать данные для всех регионов', () => {
    researchData.regions.forEach(region => {
      expect(educationCosts[region.id]).toBeDefined();
    });
  });

  it('должен содержать данные для всех специальностей в каждом регионе', () => {
    researchData.regions.forEach(region => {
      researchData.specialties.forEach(specialty => {
        expect(educationCosts[region.id]?.[specialty.id]).toBeDefined();
      });
    });
  });

  it('должен содержать данные для всех уровней образования', () => {
    researchData.regions.forEach(region => {
      researchData.specialties.forEach(specialty => {
        researchData.educationLevels.forEach(level => {
          const cost = educationCosts[region.id]?.[specialty.id]?.[level.id];
          expect(cost).toBeDefined();
          expect(typeof cost).toBe('number');
        });
      });
    });
  });

  it('должен содержать неотрицательные значения стоимости', () => {
    researchData.regions.forEach(region => {
      researchData.specialties.forEach(specialty => {
        researchData.educationLevels.forEach(level => {
          const cost = educationCosts[region.id]?.[specialty.id]?.[level.id];
          expect(cost).toBeGreaterThanOrEqual(0);
        });
      });
    });
  });

  it('должен содержать положительные значения стоимости для существующих комбинаций', () => {
    researchData.regions.forEach(region => {
      researchData.specialties.forEach(specialty => {
        researchData.educationLevels.forEach(level => {
          const cost = educationCosts[region.id]?.[specialty.id]?.[level.id];
          if (cost !== undefined) {
            expect(cost).toBeGreaterThan(0);
          }
        });
      });
    });
  });
});

describe('kpiData', () => {
  it('должен содержать массив KPI данных', () => {
    expect(Array.isArray(kpiData)).toBe(true);
    expect(kpiData.length).toBeGreaterThan(0);
  });

  it('должен содержать все KPI с обязательными полями', () => {
    kpiData.forEach(kpi => {
      expect(kpi).toHaveProperty('title');
      expect(kpi).toHaveProperty('value');
      expect(kpi).toHaveProperty('subtitle');
      
      expect(typeof kpi.title).toBe('string');
      expect(typeof kpi.value).toBe('string');
      expect(typeof kpi.subtitle).toBe('string');
    });
  });

  it('должен содержать непустые значения', () => {
    kpiData.forEach(kpi => {
      expect(kpi.title.length).toBeGreaterThan(0);
      expect(kpi.value.length).toBeGreaterThan(0);
      expect(kpi.subtitle.length).toBeGreaterThan(0);
    });
  });
});

