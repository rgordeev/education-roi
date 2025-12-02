/**
 * Компонент таба "Выводы"
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ConclusionsTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-blue-800">Заключение и рекомендации</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Ключевые выводы</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="font-semibold text-green-800 mb-2">Эффективные инвестиции (5-8 лет):</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• IT-образование в крупных городах</li>
                  <li>• Экономические специальности в финансовых центрах</li>
                  <li>• Инженерные направления в промышленных регионах</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Умеренная эффективность (8-12 лет):</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Большинство специальностей в региональных центрах</li>
                  <li>• Медицинские направления</li>
                  <li>• Юридические специальности</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold text-red-800 mb-2">Длительная окупаемость (12+ лет):</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Педагогические направления</li>
                  <li>• Гуманитарные специальности в регионах</li>
                  <li>• Некоторые творческие направления</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Тверская область:</h4>
                <p className="text-sm text-blue-700">
                  Показывает типичные для развитых регионов результаты с окупаемостью 9-15 лет, 
                  что соответствует среднероссийскому уровню эффективности образовательных инвестиций.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Рекомендации для образовательной политики</h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">Для федерального уровня:</h4>
              <ul className="space-y-2 text-blue-700">
                <li>• Дифференцированное финансирование с учётом региональных особенностей рынка труда</li>
                <li>• Стимулирование развития высокооплачиваемых отраслей в регионах</li>
                <li>• Создание механизмов удержания выпускников в регионах обучения</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">Для региональных властей:</h4>
              <ul className="space-y-2 text-green-700">
                <li>• Развитие отраслей, соответствующих профилю подготовки специалистов</li>
                <li>• Создание программ поддержки молодых специалистов</li>
                <li>• Укрепление связей между вузами и работодателями</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Источники данных</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Росстат:</strong> Данные о средней заработной плате по регионам России за 2024 год</li>
              <li>• <strong>НИУ ВШЭ:</strong> Исследование стоимости подготовки студентов (475 600 рублей на одного студента в 2024 году)</li>
              <li>• <strong>Минобрнауки РФ:</strong> Нормативы финансирования образовательных программ</li>
              <li>• <strong>Тверьстат:</strong> Региональная статистика по Тверской области</li>
              <li>• <strong>Отчёты вузов:</strong> Данные о стоимости обучения по различным направлениям подготовки</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

