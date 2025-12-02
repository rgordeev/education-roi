/**
 * Компонент таба "Результаты"
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PaybackChart } from './Charts/PaybackChart';
import { SalaryChart } from './Charts/SalaryChart';
import type { ChartDataPoint } from '../types/research';

interface ResultsTabProps {
  chartData: ChartDataPoint[];
}

export const ResultsTab = ({ chartData }: ResultsTabProps) => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-6">
        <PaybackChart data={chartData} />
        <SalaryChart data={chartData} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Тверская область в контексте исследования</CardTitle>
          <CardDescription>Детальный анализ показателей региона</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 mb-2">Средняя зарплата</h4>
              <div className="text-2xl font-bold text-blue-900">63 800 ₽</div>
              <p className="text-sm text-blue-700 mt-1">72% от московского уровня</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-2">Стоимость обучения</h4>
              <div className="text-2xl font-bold text-green-900">240-380 тыс. ₽</div>
              <p className="text-sm text-green-700 mt-1">в год, в зависимости от специальности</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">Срок окупаемости</h4>
              <div className="text-2xl font-bold text-purple-900">9-15 лет</div>
              <p className="text-sm text-purple-700 mt-1">для бакалавриата</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

