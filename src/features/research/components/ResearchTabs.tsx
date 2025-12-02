/**
 * Контейнер для всех табов исследования
 */

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MethodologyTab } from './MethodologyTab';
import { DataTab } from './DataTab';
import { ResultsTab } from './ResultsTab';
import { AnalysisTab } from './AnalysisTab';
import { SensitivityTab } from './SensitivityTab';
import { ConclusionsTab } from './ConclusionsTab';
import type { ChartDataPoint } from '../types/research';

interface ResearchTabsProps {
  chartData: ChartDataPoint[];
}

export const ResearchTabs = ({ chartData }: ResearchTabsProps) => {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");

  return (
    <Tabs defaultValue="methodology" className="space-y-6">
      <TabsList className="grid w-full grid-cols-6">
        <TabsTrigger value="methodology">Методика</TabsTrigger>
        <TabsTrigger value="data">Данные</TabsTrigger>
        <TabsTrigger value="results">Результаты</TabsTrigger>
        <TabsTrigger value="analysis">Анализ</TabsTrigger>
        <TabsTrigger value="sensitivity">Чувствительность</TabsTrigger>
        <TabsTrigger value="conclusions">Выводы</TabsTrigger>
      </TabsList>

      <TabsContent value="methodology" className="space-y-6">
        <MethodologyTab />
      </TabsContent>

      <TabsContent value="data" className="space-y-6">
        <DataTab
          selectedRegion={selectedRegion}
          selectedSpecialty={selectedSpecialty}
          selectedLevel={selectedLevel}
          onRegionChange={setSelectedRegion}
          onSpecialtyChange={setSelectedSpecialty}
          onLevelChange={setSelectedLevel}
        />
      </TabsContent>

      <TabsContent value="results" className="space-y-6">
        <ResultsTab chartData={chartData} />
      </TabsContent>

      <TabsContent value="analysis" className="space-y-6">
        <AnalysisTab />
      </TabsContent>

      <TabsContent value="sensitivity" className="space-y-6">
        <SensitivityTab />
      </TabsContent>

      <TabsContent value="conclusions" className="space-y-6">
        <ConclusionsTab />
      </TabsContent>
    </Tabs>
  );
};

