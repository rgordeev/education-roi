/**
 * Компонент KPI карточек
 */

import { Card, CardContent } from "@/components/ui/card";
import type { KPIData } from '../types/research';

interface KPICardsProps {
  kpiData: KPIData[];
}

export const KPICards = ({ kpiData }: KPICardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {kpiData.map((kpi, index) => (
        <Card key={index} className="bg-gradient-to-br from-white to-blue-50 border-blue-200">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{kpi.value}</div>
            <div className="text-sm font-medium text-gray-700">{kpi.title}</div>
            <div className="text-xs text-gray-500 mt-1">{kpi.subtitle}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

