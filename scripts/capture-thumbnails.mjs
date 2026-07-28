import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, '..', 'public', 'thumbnails');
mkdirSync(outDir, { recursive: true });

const projects = [
  {
    id: 1,
    name: 'waste-worker',
    url: 'https://waste-worker-attendance-route-register.karthikeyan-k-u-777.workers.dev',
  },
  {
    id: 2,
    name: 'portfolio',
    url: 'http://localhost:5173/',
  },
  {
    id: 3,
    name: 'blood-bank',
    url: 'https://mass-blood-bank.pages.dev/',
  },
  {
    id: 4,
    name: 'task-manager',
    url: 'https://karthikeyan-k-u.github.io/Task-Management-WebTechnology-Unit-1-/',
  },
  {
    id: 5,
    name: 'stopwatch',
    url: 'https://karthikeyan-k-u.github.io/Stop-Watch-WebTechnology-Unit-1-/',
  },
];

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });

for (const p of projects) {
  try {
    console.log(`Capturing ${p.name}...`);
    await page.goto(p.url, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));
    const path = resolve(outDir, `${p.name}.png`);
    await page.screenshot({ path, fullPage: true });
    console.log(`  Saved: ${p.name}.png`);
  } catch (e) {
    console.log(`  FAILED: ${p.name} - ${e.message}`);
  }
}

await browser.close();
console.log('Done!');
