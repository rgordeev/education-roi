/**
 * Компонент таба "Данные"
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { researchData, educationCosts } from '@/data';
import { calculatePayback } from '../utils/calculations';

interface DataTabProps {
  selectedRegion: string;
  selectedSpecialty: string;
  selectedLevel: string;
  onRegionChange: (value: string) => void;
  onSpecialtyChange: (value: string) => void;
  onLevelChange: (value: string) => void;
}

export const DataTab = ({
  selectedRegion,
  selectedSpecialty,
  selectedLevel,
  onRegionChange,
  onSpecialtyChange,
  onLevelChange,
}: DataTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-blue-800">Исходные данные исследования</CardTitle>
        <CardDescription>
          Стоимость обучения, средние зарплаты и налоговые ставки по регионам и специальностям
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Select value={selectedRegion} onValueChange={onRegionChange}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите регион" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все регионы</SelectItem>
                {researchData.regions.map(region => (
                  <SelectItem key={region.id} value={region.id}>
                    {region.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSpecialty} onValueChange={onSpecialtyChange}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите специальность" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все специальности</SelectItem>
                {researchData.specialties.map(specialty => (
                  <SelectItem key={specialty.id} value={specialty.id}>
                    {specialty.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLevel} onValueChange={onLevelChange}>
              <SelectTrigger>
                <SelectValue placeholder="Уровень образования" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все уровни</SelectItem>
                {researchData.educationLevels.map(level => (
                  <SelectItem key={level.id} value={level.id}>
                    {level.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Регион</TableHead>
                  <TableHead>Специальность</TableHead>
                  <TableHead>Уровень</TableHead>
                  <TableHead>Стоимость/год</TableHead>
                  <TableHead>Полная стоимость</TableHead>
                  <TableHead>Средняя зарплата</TableHead>
                  <TableHead>Годовой НДФЛ</TableHead>
                  <TableHead>Срок окупаемости</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {researchData.regions
                  .filter(region => selectedRegion === "all" || region.id === selectedRegion)
                  .map(region => 
                    researchData.specialties
                      .filter(specialty => selectedSpecialty === "all" || specialty.id === selectedSpecialty)
                      .map(specialty =>
                        researchData.educationLevels
                          .filter(level => selectedLevel === "all" || level.id === selectedLevel)
                          .map(level => {
                            const payback = calculatePayback(region.id, specialty.id, level.id);
                            const costPerYear = educationCosts[region.id]?.[specialty.id]?.[level.id] || 0;
                            
                            return (
                              <TableRow key={`${region.id}-${specialty.id}-${level.id}`}>
                                <TableCell className="font-medium">
                                  {region.name}
                                  {region.id === 'tver' && <Badge className="ml-2 bg-green-100 text-green-800">Фокус</Badge>}
                                </TableCell>
                                <TableCell>{specialty.name}</TableCell>
                                <TableCell>{level.name}</TableCell>
                                <TableCell>{costPerYear.toLocaleString()} ₽</TableCell>
                                <TableCell>{payback?.totalCost.toLocaleString()} ₽</TableCell>
                                <TableCell>{region.avgSalary.toLocaleString()} ₽</TableCell>
                                <TableCell>{payback?.yearlyTax.toLocaleString()} ₽</TableCell>
                                <TableCell>
                                  <Badge variant={payback?.paybackYears <= 10 ? "default" : "destructive"}>
                                    {payback?.paybackYears} лет
                                  </Badge>
                                </TableCell>
                              </TableRow>
                            );
                          })
                      ).flat()
                  ).flat()}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

