/**
 * Компонент графика сроков окупаемости по регионам
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { ChartDataPoint } from '../../types/research';

interface PaybackChartProps {
  data: ChartDataPoint[];
}

export const PaybackChart = ({ data }: PaybackChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Сроки окупаемости по регионам</CardTitle>
        <CardDescription>Бакалавриат, различные специальности</CardDescription>
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
            <YAxis label={{ value: 'Годы', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="itPayback" fill="#3B82F6" name="IT" />
            <Bar dataKey="economicsPayback" fill="#10B981" name="Экономика" />
            <Bar dataKey="lawPayback" fill="#F59E0B" name="Право" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

