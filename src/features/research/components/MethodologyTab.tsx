/**
 * Компонент таба "Методика"
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MethodologyTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-blue-800">Методика и обоснование корректности</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Описание методики расчёта</h3>
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Рассчитываемые величины:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Годовая стоимость обучения</strong> - бюджетные расходы на подготовку одного студента в год</li>
                <li><strong>Полная стоимость подготовки</strong> - общие затраты за весь период обучения (4 года для бакалавриата, 2 года для магистратуры)</li>
                <li><strong>Годовые налоговые отчисления</strong> - НДФЛ с средней заработной платы по региону</li>
                <li><strong>Срок окупаемости</strong> - количество лет, за которое государство возвращает инвестиции через налоги</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Формула расчёта:</h4>
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
                <p className="font-mono text-sm">
                  Срок окупаемости = (Стоимость обучения × Продолжительность) / (Средняя зарплата × 12 × 0.13)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Обоснование значимости и реалистичности</h3>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Выбранная методика отражает <strong>реальное экономическое содержание</strong> взаимосвязи между 
              государственными инвестициями в образование и последующими налоговыми поступлениями. 
              Использование средней заработной платы по региону обеспечивает осмысленную приближенную оценку, 
              поскольку большинство выпускников трудоустраиваются в том же регионе, где получили образование.
            </p>
            <p className="mb-4">
              Экономический смысл показателя "срок окупаемости" заключается в определении периода, 
              за который государство через налоговые поступления возвращает средства, 
              инвестированные в подготовку специалиста.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="font-semibold text-green-800 mb-2">Ключевые допущения:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Выпускник работает официально</li>
                  <li>• Получает среднюю по региону зарплату</li>
                  <li>• Налоговые ставки стабильны</li>
                  <li>• Отсутствие миграции в другие регионы</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Источники погрешности:</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Использование средних значений</li>
                  <li>• Неучёт безработицы и миграции</li>
                  <li>• Различия в качестве образования</li>
                  <li>• Изменения в экономике</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

