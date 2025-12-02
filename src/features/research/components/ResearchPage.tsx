/**
 * Главный компонент страницы исследования
 * Компонует все части: Header, KPI, Tabs
 */

import { ResearchHeader } from './ResearchHeader';
import { ResearchTabs } from './ResearchTabs';
import { usePaybackCalculation } from '../hooks/usePaybackCalculation';
import { researchData, educationCosts, kpiData } from '@/data';

export const ResearchPage = () => {
  const { chartData } = usePaybackCalculation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <ResearchHeader kpiData={kpiData} />

      <div className="container mx-auto px-6 py-8">
        <ResearchTabs chartData={chartData} />
      </div>

      {/* JSON данные для экспорта */}
      <script type="application/json" id="dataset-main">
        {JSON.stringify({
          regions: researchData.regions,
          specialties: researchData.specialties,
          educationLevels: researchData.educationLevels,
          costs: educationCosts,
          chartData: chartData,
          kpiData: kpiData
        }, null, 2)}
      </script>
    </div>
  );
};

