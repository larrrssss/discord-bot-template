import path from 'path';
import fs from 'fs';

// Load data of files nested in a specifiy folder
export async function getFiles<T>(p: string): Promise<T[]> {
  try {
    const files = [];
    
    for (const f of await fs.promises.readdir(p)) {
      if (['js', 'ts'].includes(f.split('.').pop() || '')) {
        files.push((await import(path.join(p, f))).default);
      } else {
        files.push(...(await getFiles(path.join(p, f))));
      }
    }
  
    return files;
  } catch (e) {
    console.error(`Error loading files in ${p}`, e);
    return [];
  }
}