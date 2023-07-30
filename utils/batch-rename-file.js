import path from 'node:path';
import { readdir, rename } from 'node:fs/promises';

if (process.argv.length === 2) { 
 console.error('Expected at least one argument!'); 
 process.exit(1); 
} 

const args = process.argv.reduce((reduced, item) => {
  const [arg, content] = item.split('=');

  if (!!arg.match(/^-\w/)) {
    reduced[arg.replace(/^-/, '')] = content;
  }
  
  return reduced;
}, {});


const PRESETS = {
  DJI_MIC: `^DJI_\\d+_`
};

const toRemove = new RegExp(args.regex || PRESETS[args.preset]);

console.log(`BATCH RENAMING using ${ args.regex ? `regex ${args.regex}` : `preset ${args.preset}` }`)

try {
  const files = await readdir(args.path);

  await Promise.all(
    files.reduce((reduced, fileName) => {
      const newFileName = fileName.replace(toRemove, '');
      console.log(`${fileName} - [initialized]`)

      if (!fileName.match(toRemove)) {
        console.log(`${fileName} - [finalized][ignored]`);
        return reduced;
      }

      reduced.push(
        rename(
          path.join(args.path, fileName),
          path.join(args.path, newFileName)
        ).then(()=> console.log(`${fileName} - [finalized new file name is] ${newFileName}`))
      );

      return reduced;
    }, [])
  );
} catch (err) {
  console.error(err);
} 