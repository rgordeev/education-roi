/**
 * Компонент таба "Анализ"
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AnalysisTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-blue-800">Анализ и интерпретация результатов</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Различия по регионам</h3>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Анализ показывает значительную дифференциацию сроков окупаемости образовательных инвестиций 
              между регионами России. <strong>Москва</strong> демонстрирует наиболее быстрые сроки возврата 
              инвестиций (5-8 лет) благодаря высокому уровню заработных плат, несмотря на повышенную 
              стоимость обучения.
            </p>
            <p className="mb-4">
              <strong>Тверская область</strong> занимает промежуточное положение среди исследуемых регионов. 
              При средней зарплате 63 800 рублей и относительно умеренной стоимости обучения (240-380 тыс. рублей в год), 
              срок окупаемости составляет 9-15 лет для бакалавриата, что соответствует общероссийским показателям 
              для регионов с развитой экономикой.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Различия по специальностям</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-2">Быстрая окупаемость (5-10 лет):</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• IT-специальности в крупных городах</li>
                <li>• Экономические направления в финансовых центрах</li>
                <li>• Инженерные специальности в промышленных регионах</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">Медленная окупаемость (10+ лет):</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Педагогические направления</li>
                <li>• Медицинские специальности (из-за высокой стоимости)</li>
                <li>• Гуманитарные направления в регионах</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Бакалавриат vs Магистратура</h3>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Магистратура показывает неоднозначные результаты с точки зрения окупаемости. 
              В IT-сфере и экономике магистерская степень часто приводит к существенному 
              росту заработной платы, что компенсирует дополнительные 2 года обучения.
            </p>
            <p className="text-gray-700">
              В педагогических и некоторых гуманитарных направлениях магистратура 
              увеличивает общий объём государственных инвестиций, но практически 
              не влияет на уровень будущих доходов выпускника.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

