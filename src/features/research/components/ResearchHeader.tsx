/**
 * Компонент заголовка исследования
 */

import { KPICards } from './KPICards';
import type { KPIData } from '../types/research';

interface ResearchHeaderProps {
  kpiData: KPIData[];
}

export const ResearchHeader = ({ kpiData }: ResearchHeaderProps) => {
  return (
    <header className="bg-white shadow-lg border-b-4 border-blue-600">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Экономическая эффективность высшего образования в России
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Анализ стоимости подготовки специалистов и сроков окупаемости инвестиций государства
          </p>
          <div className="bg-blue-50 rounded-lg p-4 inline-block">
            <p className="text-lg font-semibold text-blue-800">
              Автор исследования: <span className="text-blue-900">Гордеев Роман Николаевич, к.ф.-м.н.</span>
            </p>
          </div>
        </div>
        
        <KPICards kpiData={kpiData} />
      </div>
    </header>
  );
};
