const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const footerPath = path.join(dir, 'FooterSection.jsx');
const lines = fs.readFileSync(footerPath, 'utf8').split('\n');

const footerLines = lines.slice(2, 105);
const transLines = lines.slice(106, 174);
const adLines = lines.slice(175, 208);
const blogLines = lines.slice(209, 268);

fs.writeFileSync(path.join(dir, 'FooterSection.jsx'), "import React from 'react';\n\n" + footerLines.join('\n') + "\n\nexport default FooterSection;\n");
fs.writeFileSync(path.join(dir, 'TransformationsSection.jsx'), "import React, { useRef } from 'react';\n\n" + transLines.join('\n') + "\n\nexport default TransformationsSection;\n");
fs.writeFileSync(path.join(dir, 'AdBannersSection.jsx'), "import React from 'react';\n\n" + adLines.join('\n') + "\n\nexport default AdBannersSection;\n");
fs.writeFileSync(path.join(dir, 'BlogAndNewsletterSection.jsx'), "import React from 'react';\n\n" + blogLines.join('\n') + "\n\nexport default BlogAndNewsletterSection;\n");

const statsPath = path.join(dir, 'StatsBanner.jsx');
const statsLines = fs.readFileSync(statsPath, 'utf8').split('\n');
const footerIdx = statsLines.findIndex(l => l.startsWith('const FooterSection'));
if (footerIdx !== -1) {
    const pureStats = statsLines.slice(0, footerIdx - 1);
    fs.writeFileSync(statsPath, pureStats.join('\n') + "\n\nexport default StatsBanner;\n");
}
