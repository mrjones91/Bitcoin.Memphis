const fs = require('fs');
const path = require('path');

function verifyBuild() {
  const requiredFiles = [
    'dist/index.html',
    'dist/css/style.min.css',
    'dist/js/main.min.js'
  ];

  const errors = [];

  // Check for required files
  requiredFiles.forEach(file => {
    if (!fs.existsSync(path.join(process.cwd(), file))) {
      errors.push(`Missing required file: ${file}`);
    }
  });

  // Check file sizes
  if (errors.length === 0) {
    const cssSize = fs.statSync('dist/css/style.min.css').size / 1024; // KB
    const jsSize = fs.statSync('dist/js/main.min.js').size / 1024; // KB

    if (cssSize > 100) errors.push(`CSS bundle too large: ${cssSize.toFixed(2)}KB`);
    if (jsSize > 100) errors.push(`JS bundle too large: ${jsSize.toFixed(2)}KB`);
  }

  return errors;
}

// Run verification
const errors = verifyBuild();
if (errors.length > 0) {
  console.error('Build verification failed:');
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
} else {
  console.log('Build verification passed!');
} 