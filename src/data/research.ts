/**
 * Данные исследования экономической эффективности высшего образования в России
 */

import type { ResearchData, EducationCosts, KPIData } from '@/features/research/types/research';

export const researchData: ResearchData = {
  regions: [
    { id: "moscow", name: "Москва", avgSalary: 162100, population: 12600000 },
    { id: "spb", name: "Санкт-Петербург", avgSalary: 95000, population: 5400000 },
    { id: "tver", name: "Тверская область", avgSalary: 63800, population: 1230000 },
    { id: "tatarstan", name: "Республика Татарстан", avgSalary: 58000, population: 3900000 },
    { id: "sverdlovsk", name: "Свердловская область", avgSalary: 70000, population: 4300000 },
    { id: "novosibirsk", name: "Новосибирская область", avgSalary: 65000, population: 2800000 },
    { id: "krasnodar", name: "Краснодарский край", avgSalary: 55000, population: 5700000 }
  ],
  specialties: [
    { id: "it", name: "Информатика и вычислительная техника", sector: "IT" },
    { id: "economics", name: "Экономика", sector: "Экономика" },
    { id: "law", name: "Юриспруденция", sector: "Право" },
    { id: "medicine", name: "Лечебное дело", sector: "Медицина" },
    { id: "pedagogy", name: "Педагогическое образование", sector: "Образование" },
    { id: "engineering", name: "Инженерные специальности", sector: "Промышленность" }
  ],
  educationLevels: [
    { id: "bachelor", name: "Бакалавриат", duration: 4 },
    { id: "master", name: "Магистратура", duration: 2 }
  ]
};

// Стоимость обучения по специальностям и регионам (руб./год)
export const educationCosts: EducationCosts = {
  moscow: {
    it: { bachelor: 520000, master: 580000 },
    economics: { bachelor: 450000, master: 500000 },
    law: { bachelor: 480000, master: 520000 },
    medicine: { bachelor: 650000, master: 700000 },
    pedagogy: { bachelor: 380000, master: 420000 },
    engineering: { bachelor: 490000, master: 540000 }
  },
  spb: {
    it: { bachelor: 420000, master: 470000 },
    economics: { bachelor: 380000, master: 420000 },
    law: { bachelor: 400000, master: 440000 },
    medicine: { bachelor: 550000, master: 600000 },
    pedagogy: { bachelor: 320000, master: 360000 },
    engineering: { bachelor: 410000, master: 450000 }
  },
  tver: {
    it: { bachelor: 280000, master: 320000 },
    economics: { bachelor: 240000, master: 280000 },
    law: { bachelor: 260000, master: 300000 },
    medicine: { bachelor: 380000, master: 420000 },
    pedagogy: { bachelor: 200000, master: 240000 },
    engineering: { bachelor: 270000, master: 310000 }
  },
  tatarstan: {
    it: { bachelor: 300000, master: 340000 },
    economics: { bachelor: 260000, master: 300000 },
    law: { bachelor: 280000, master: 320000 },
    medicine: { bachelor: 400000, master: 440000 },
    pedagogy: { bachelor: 220000, master: 260000 },
    engineering: { bachelor: 290000, master: 330000 }
  },
  sverdlovsk: {
    it: { bachelor: 320000, master: 360000 },
    economics: { bachelor: 280000, master: 320000 },
    law: { bachelor: 300000, master: 340000 },
    medicine: { bachelor: 420000, master: 460000 },
    pedagogy: { bachelor: 240000, master: 280000 },
    engineering: { bachelor: 310000, master: 350000 }
  },
  novosibirsk: {
    it: { bachelor: 310000, master: 350000 },
    economics: { bachelor: 270000, master: 310000 },
    law: { bachelor: 290000, master: 330000 },
    medicine: { bachelor: 410000, master: 450000 },
    pedagogy: { bachelor: 230000, master: 270000 },
    engineering: { bachelor: 300000, master: 340000 }
  },
  krasnodar: {
    it: { bachelor: 290000, master: 330000 },
    economics: { bachelor: 250000, master: 290000 },
    law: { bachelor: 270000, master: 310000 },
    medicine: { bachelor: 390000, master: 430000 },
    pedagogy: { bachelor: 210000, master: 250000 },
    engineering: { bachelor: 280000, master: 320000 }
  }
};

export const kpiData: KPIData[] = [
  { title: "Средняя стоимость обучения", value: "475 600 ₽", subtitle: "на одного студента в год" },
  { title: "Средняя зарплата по РФ", value: "87 952 ₽", subtitle: "в месяц в 2024 году" },
  { title: "Типичный срок окупаемости", value: "8-12 лет", subtitle: "для бакалавриата" },
  { title: "Регионов в исследовании", value: "7", subtitle: "включая Тверскую область" }
];

