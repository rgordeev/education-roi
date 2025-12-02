/**
 * Компонент графика средних зарплат по регионам
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { ChartDataPoint } from '../../types/research';

interface SalaryChartProps {
  data: ChartDataPoint[];
}

export const SalaryChart = ({ data }: SalaryChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Средние зарплаты по регионам</CardTitle>
        <CardDescription>Данные Росстата за 2024 год</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="region" 
              angle={-45}
              textAnchor="end"
              height={80}
              fontSize={12}
            />
            <YAxis label={{ value: 'Рубли', angle: -90, position: 'insideLeft' }} />
            <Tooltip formatter={(value) => [`${value.toLocaleString()} ₽`, 'Средняя зарплата']} />
            <Bar dataKey="avgSalary" fill="#8B5CF6" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

