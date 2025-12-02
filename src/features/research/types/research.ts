/**
 * Типы данных для исследования экономической эффективности высшего образования
 */

export interface Region {
  id: string;
  name: string;
  avgSalary: number;
  population: number;
}

export interface Specialty {
  id: string;
  name: string;
  sector: string;
}

export interface EducationLevel {
  id: string;
  name: string;
  duration: number;
}

export interface ResearchData {
  regions: Region[];
  specialties: Specialty[];
  educationLevels: EducationLevel[];
}

export interface EducationCosts {
  [regionId: string]: {
    [specialtyId: string]: {
      bachelor: number;
      master: number;
    };
  };
}

export interface PaybackResult {
  totalCost: number;
  yearlyTax: number;
  paybackYears: number;
}

export interface ChartDataPoint {
  region: string;
  regionId: string;
  avgSalary: number;
  itPayback: number;
  economicsPayback: number;
  lawPayback: number;
}

export interface KPIData {
  title: string;
  value: string;
  subtitle: string;
}

