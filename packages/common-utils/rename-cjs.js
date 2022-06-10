// @ts-check
import fs from 'fs';
import path from 'path';

class Suffix {
  replace(filePath) {
    const file = path.parse(filePath);

    if (file.ext === '.js') {
      /**
       * Rewrite imports
       */
      if (fs.existsSync(filePath) && !fs.lstatSync(filePath).isDirectory()) {
        const fileContent = fs.readFileSync(filePath);
        const fileContentStr = fileContent.toString();
        // @ts-ignore
        const updatedFileContentStr = fileContentStr.replaceAll('.js"', '.cjs"');
        fs.writeFileSync(filePath, updatedFileContentStr);
      }

      // make sure that we remove old .cjs files
      if (
        fs.existsSync(filePath.replace('.js', '.cjs')) &&
        !fs.lstatSync(filePath.replace('.js', '.cjs')).isDirectory()
      ) {
        fs.rmSync(filePath.replace('.js', '.cjs'));
      }
      return filePath.replace('.js', '.cjs');
    }

    return filePath;
  }
}

export default Suffix;
