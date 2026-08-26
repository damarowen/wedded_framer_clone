import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSET_ROOT = path.resolve(__dirname, '../public/sites/wedded-framer-website-6500aaa5/root-8a5edab2/images');
const FONT_ROOT = path.resolve(__dirname, '../public/sites/wedded-framer-website-6500aaa5/shared/fonts');

const imageUrls = [
  ['hero', 'https://framerusercontent.com/images/3ie9g31UYOA8bleaCtB7rkrgFY8.jpg?width=6461&height=4307'],
  ['story-1', 'https://framerusercontent.com/images/Zf010h8cD4AMWXuXugQlx5LSY.jpg?width=640&height=427'],
  ['story-2', 'https://framerusercontent.com/images/APiTgyNpfKLhtLTnkUDL0DQF0.jpg?width=640&height=897'],
  ['story-3', 'https://framerusercontent.com/images/ilwvGxAFzujFLwLPrmX9Ah7GOk.jpg?width=640&height=427'],
  ['story-4', 'https://framerusercontent.com/images/3nH4UiZw1qENdhpls1z1jTsyf4.jpg?width=640&height=427'],
  ['story-5', 'https://framerusercontent.com/images/2trYhqNTk6o09KiCGyRqhBUwYIk.jpg?width=640&height=427'],
  ['story-6', 'https://framerusercontent.com/images/rGie25GRtAh7SUXrGbngiiJI.jpg?width=1920&height=2880'],
  ['location-1', 'https://framerusercontent.com/images/3ajEx4yxWiXgLCAylmVW9xs3kAc.jpg?width=1920&height=1280'],
  ['location-2', 'https://framerusercontent.com/images/VD5pA4xfLX7kEsWTAhdOE4jCdfY.jpg?width=1920&height=1280'],
  ['location-3', 'https://framerusercontent.com/images/PTehlOTH1Dx8buDYBmLzJPbAkg.jpg?width=1920&height=1280'],
  ['location-4', 'https://framerusercontent.com/images/AifCvmnPcc0cRUebIQsvotBKb2w.jpg?width=1280&height=853'],
  ['hotel-1', 'https://framerusercontent.com/images/6oSM3W3fBVkls9KjcpoNIs1I0A.jpg?width=640&height=427'],
  ['hotel-2', 'https://framerusercontent.com/images/5T9JtrLnKKtPM2lcjPjFsDgXrU.jpg?width=640&height=427'],
  ['hotel-3', 'https://framerusercontent.com/images/vBPYqoLBHFX4ewUbNeIITrHv8cI.jpg?width=640&height=427'],
  ['pre-gathering', 'https://framerusercontent.com/images/SviB69ITTsEYvQfyDLb6lKcVA.jpg?width=1920&height=1280'],
  ['day-1', 'https://framerusercontent.com/images/E0cxjniEAasKO5hQMRyIL8F3hM.jpg?width=640&height=427'],
  ['day-2', 'https://framerusercontent.com/images/TrVaSiFdtFikjr6Sv54xENnkE.jpg?width=640&height=853'],
  ['day-3', 'https://framerusercontent.com/images/zRg5KeqiQYBhvPjESD0df5Gmw.jpg?width=640&height=959'],
  ['day-4', 'https://framerusercontent.com/images/8NiLsbYqCCMKBZHzGj5J69pJZ48.jpg?width=639&height=424'],
  ['flowers', 'https://framerusercontent.com/images/YUav5UDgqXxjaKdYQoaKN3JOtSQ.jpg?width=3861&height=2574'],
  ['couple', 'https://framerusercontent.com/images/bs5l3fhAoFlL9R8bKcFdmsy5Mo.jpg?width=1920&height=2880'],
  ['rsvp-bg', 'https://framerusercontent.com/images/RnRSVtxOWx3RYaPOvqFMWJw.jpg?width=7008&height=4672'],
];

const arrowUrls = [
  ['arrow-left', 'https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg?arrow=left'],
  ['arrow-right', 'https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg?arrow=right'],
];

async function downloadFile(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.writeFile(dest, buf);
  console.log('downloaded', dest, `(${(buf.length / 1024).toFixed(1)}KB)`);
}

async function downloadBatch(items, root) {
  const batchSize = 4;
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    await Promise.all(
      batch.map(([name, url]) => {
        const ext = url.split('?')[0].split('.').pop();
        const safeName = `${name}.${ext}`;
        return downloadFile(url, path.join(root, safeName));
      })
    );
  }
}

await fs.mkdir(ASSET_ROOT, { recursive: true });
await fs.mkdir(FONT_ROOT, { recursive: true });

await downloadBatch(imageUrls, ASSET_ROOT);
await downloadBatch(arrowUrls, ASSET_ROOT);

console.log('Asset download complete.');
