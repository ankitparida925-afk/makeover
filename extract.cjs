const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'src', 'App.jsx');
const outputDir = path.join(__dirname, 'src', 'components');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let content = fs.readFileSync(inputPath, 'utf8');

const markers = [
  'const MapPinIcon',
  'const PhoneIcon',
  'const ClockIcon',
  'const TopBar',
  'const Navbar',
  'const Hero',
  'const FeaturesBar',
  'const AboutSection',
  'const TrainingSection',
  'const ServicesSection',
  'const StatsBanner',
  'const TransformationsSection',
  'const AdBannersSection',
  'const BlogAndNewsletterSection',
  'const FooterSection',
  'function App'
];

const blocks = {};

for (let i = 0; i < markers.length; i++) {
  const currentMarker = markers[i];
  const nextMarker = markers[i + 1] || 'export default App;';
  
  const startIndex = content.indexOf(currentMarker);
  const endIndex = content.indexOf(nextMarker);
  
  let blockContent = content.substring(startIndex, endIndex).trim();
  blocks[currentMarker.replace(/const |function /, '')] = blockContent;
}

const getImports = (code) => {
    const usedHooks = [];
    ['useState', 'useEffect', 'useRef'].forEach(hook => {
        if (code.includes(hook)) usedHooks.push(hook);
    });
    return usedHooks.length > 0 
        ? `import React, { ${usedHooks.join(', ')} } from 'react';\n\n`
        : `import React from 'react';\n\n`;
}

// 1. TopBar
const topBarCode = getImports(blocks['TopBar']) + 
  blocks['MapPinIcon'] + '\n\n' + 
  blocks['PhoneIcon'] + '\n\n' + 
  blocks['ClockIcon'] + '\n\n' + 
  blocks['TopBar'] + '\n\nexport default TopBar;\n';
fs.writeFileSync(path.join(outputDir, 'TopBar.jsx'), topBarCode);

// 2. The rest
const componentsToExtract = [
  'Navbar', 'Hero', 'FeaturesBar', 'AboutSection', 
  'TrainingSection', 'ServicesSection', 'StatsBanner', 
  'TransformationsSection', 'AdBannersSection', 'BlogAndNewsletterSection', 'FooterSection'
];

componentsToExtract.forEach(comp => {
  const code = getImports(blocks[comp]) + blocks[comp] + `\n\nexport default ${comp};\n`;
  fs.writeFileSync(path.join(outputDir, `${comp}.jsx`), code);
});

// 3. Update App.jsx
const appImports = [
  'TopBar', ...componentsToExtract
].map(c => `import ${c} from './components/${c}';`).join('\n');

const finalApp = `import React from 'react';\nimport './index.css';\n${appImports}\n\n${blocks['App']}\n\nexport default App;\n`;
fs.writeFileSync(inputPath, finalApp);

console.log('Extraction complete.');
