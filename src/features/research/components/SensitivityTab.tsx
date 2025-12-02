/**
 * Компонент таба "Чувствительность"
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SensitivityTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-blue-800">Чувствительный анализ и ограничения</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Сценарный анализ</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h4 className="font-semibold text-red-800 mb-2">Пессимистичный сценарий</h4>
              <p className="text-sm text-red-700 mb-2">Зарплата на 20% ниже средней</p>
              <div className="text-lg font-bold text-red-900">+2-3 года к окупаемости</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
              <h4 className="font-semibold text-gray-800 mb-2">Базовый сценарий</h4>
              <p className="text-sm text-gray-700 mb-2">Средняя зарплата по региону</p>
              <div className="text-lg font-bold text-gray-900">8-12 лет</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-2">Оптимистичный сценарий</h4>
              <p className="text-sm text-green-700 mb-2">Зарплата на 20% выше средней</p>
              <div className="text-lg font-bold text-green-900">-1-2 года от окупаемости</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Ограничения исследования</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Методологические ограничения:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Использование средних значений вместо распределения доходов
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Игнорирование миграции выпускников между регионами
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Неучёт периодов безработицы и смены профессии
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Допущение о стабильности налогового законодательства
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Источники данных:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Возможная несопоставимость данных между вузами
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Различия в методиках расчёта стоимости обучения
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Временные лаги в статистических данных
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Неполный учёт скрытых расходов на образование
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Направления улучшения методики</h3>
          <div className="bg-blue-50 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">1.</span>
                <strong>Детализация по отраслям:</strong> Получение более точных данных о зарплатах выпускников по конкретным специальностям и отраслям трудоустройства
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">2.</span>
                <strong>Карьерные траектории:</strong> Анализ фактических карьерных путей выпускников и динамики их доходов во времени
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">3.</span>
                <strong>Региональная мобильность:</strong> Учёт миграционных потоков выпускников между регионами
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">4.</span>
                <strong>Полные налоговые поступления:</strong> Включение в расчёт всех видов налогов и сборов, уплачиваемых выпускниками
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

