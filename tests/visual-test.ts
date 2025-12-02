/**
 * Скрипт для визуального тестирования через Playwright
 * Делает скриншоты страницы для сравнения до и после изменений
 */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface VisualTestConfig {
  url: string;
  viewport?: { width: number; height: number };
  waitForSelector?: string;
  fullPage?: boolean;
}

async function takeScreenshot(config: VisualTestConfig, outputPath: string) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Устанавливаем размер viewport
    if (config.viewport) {
      await page.setViewportSize(config.viewport);
    } else {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }

    // Переходим на страницу
    await page.goto(config.url, { waitUntil: 'networkidle' });

    // Ждем загрузки контента
    if (config.waitForSelector) {
      await page.waitForSelector(config.waitForSelector, { timeout: 10000 });
    } else {
      // Ждем по умолчанию загрузки основного контента
      await page.waitForSelector('header', { timeout: 10000 });
    }

    // Делаем скриншот
    await page.screenshot({
      path: outputPath,
      fullPage: config.fullPage ?? true,
    });

    console.log(`✅ Скриншот сохранен: ${outputPath}`);
  } catch (error) {
    console.error('❌ Ошибка при создании скриншота:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

async function runVisualTest() {
  const snapshotsDir = path.join(__dirname, 'visual-snapshots');
  
  // Создаем директорию для снимков, если её нет
  if (!fs.existsSync(snapshotsDir)) {
    fs.mkdirSync(snapshotsDir, { recursive: true });
  }

  // Проверяем, запущен ли dev сервер
  const devUrl = process.env.DEV_URL || 'http://localhost:8080';
  
  console.log(`🌐 Проверяем доступность ${devUrl}...`);
  
  try {
    const response = await fetch(devUrl);
    if (!response.ok) {
      throw new Error(`Сервер недоступен: ${response.status}`);
    }
  } catch (error) {
    console.error('❌ Dev сервер не запущен или недоступен!');
    console.error('💡 Запустите dev сервер: npm run dev');
    process.exit(1);
  }

  const timestamp = Date.now();
  const config: VisualTestConfig = {
    url: devUrl,
    viewport: { width: 1920, height: 1080 },
    waitForSelector: 'header',
    fullPage: true,
  };

  // Делаем скриншот полной страницы
  const fullPagePath = path.join(snapshotsDir, `full-page-${timestamp}.png`);
  await takeScreenshot(config, fullPagePath);

  // Также сохраняем как latest.png для удобства сравнения
  const latestPath = path.join(snapshotsDir, 'latest.png');
  fs.copyFileSync(fullPagePath, latestPath);
  console.log(`✅ Последний скриншот сохранен в ${latestPath}`);

  // Делаем скриншоты для разных размеров экрана
  const viewports = [
    { width: 1920, height: 1080, name: 'desktop' },
    { width: 768, height: 1024, name: 'tablet' },
    { width: 375, height: 667, name: 'mobile' },
  ];

  for (const viewport of viewports) {
    const viewportPath = path.join(snapshotsDir, `${viewport.name}-${timestamp}.png`);
    await takeScreenshot(
      { ...config, viewport },
      viewportPath
    );
  }

  console.log('✅ Все скриншоты успешно созданы');
}

// Запускаем визуальный тест
runVisualTest().catch(console.error);

