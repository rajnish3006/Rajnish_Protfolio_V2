import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const indexPath = join(root, "index.html");
const cssPath = join(root, "styles.css");
const scriptPath = join(root, "script.js");
const resumePath = join(root, "assets", "Rajnish_Kumar_Feb_26.pdf");
const faviconPath = join(root, "assets", "rpa-favicon.svg");
const uipathCertificatePath = join(root, "assets", "uipath-adpv1-certificate.png");

assert.equal(existsSync(indexPath), true, "index.html should exist");
assert.equal(existsSync(cssPath), true, "styles.css should exist");
assert.equal(existsSync(scriptPath), true, "script.js should exist");
assert.equal(existsSync(resumePath), true, "resume PDF should be copied into assets");
assert.equal(existsSync(faviconPath), true, "RPA favicon should exist");
assert.equal(existsSync(uipathCertificatePath), true, "UiPath certificate screenshot should be fetched into assets");

const html = readFileSync(indexPath, "utf8");
const css = readFileSync(cssPath, "utf8");
const script = readFileSync(scriptPath, "utf8");
const favicon = existsSync(faviconPath) ? readFileSync(faviconPath, "utf8") : "";
const uipathCertificateSize = existsSync(uipathCertificatePath) ? readFileSync(uipathCertificatePath).byteLength : 0;

const requiredText = [
  "Rajnish Kumar",
  "RPA Developer",
  "Process Automation Specialist",
  "Building RPA Bots That Move Faster, Fail Safer, and Scale Cleaner",
  "I am Rajnish Kumar, an RPA Developer with 4+ years of experience designing, developing, deploying, and stabilizing enterprise automation solutions across UiPath, Blue Prism, Power Automate Desktop, and Power Automate Cloud.",
  "Proof of Automation Impact Across Speed, Stability, Cost, and Accuracy",
  "Results-Driven RPA Development Across Platforms, Processes, and Teams",
  "Enterprise Automation Delivery at EY and Infosys",
  "RPA Project Missions Across HR, Finance, Retail, and Support",
  "A Practical Stack for RPA Build, Test, Integration, and Operations",
  "Certifications, Education, Awards, and Recognition",
  "Let Us Talk About RPA Delivery, Support, And Process Transformation",
  "UiPath",
  "Blue Prism",
  "Power Automate",
  "Employee Termination Process Automation",
  "Card Replacement Automation",
  "Taj Voucher Generation System",
  "Payroll Monitoring Automation",
  "Department Shift and Job Code Update Automation",
  "Employee Lifecycle Operations",
  "OpenWeather_Temperature_Extraction_Using_API_UiPath",
  "RPA Challenge_Using_UiPath_Re-Framework",
  "BotFarmController",
  "PAD Selector Assistant",
  "Advanced Prompt Engineering",
  "Finance, retail, and HR domain exposure",
  "RPA Flow Blueprint",
  "Trigger",
  "Validate",
  "Queue",
  "Run Bot",
  "Decision",
  "Retry",
  "Report",
  "UiPath Advanced RPA Developer",
  "View UiPath Certificate",
  "Emerging Extraordinaire",
  "Infosys Insta Award",
  "Toycathon-21",
  "Indira Gandhi National Open University",
  "IIMT College of Management"
];

for (const text of requiredText) {
  assert.ok(html.includes(text), `index.html should include "${text}"`);
}

const requiredLinks = [
  "https://www.linkedin.com/in/rajnishkumar3006/",
  "https://github.com/rajnish3006?tab=repositories",
  "https://github.com/rajnish3006/Fetch-Temperature-detail-from-OpenWeather_API_UiPath",
  "https://github.com/rajnish3006/RPA_RE_Framework_RPA_Challenge_UiPath",
  "https://credentials.uipath.com/af5474d0-1b3d-4cfc-aa80-63c660805308",
  "mailto:Rajnishkumar94702@gmail.com",
  "tel:+919279632193",
  "assets/Rajnish_Kumar_Feb_26.pdf"
];

for (const link of requiredLinks) {
  assert.ok(html.includes(link), `index.html should include clickable link "${link}"`);
}

assert.ok(!html.includes("assets/rajnish-transparent.png"), "portfolio should not reference the portrait image");
assert.ok(!html.includes('class="profile-button"'), "profile image button should be removed");
assert.ok(!html.includes('id="profileModal"'), "portrait modal should be removed");
assert.ok(!script.includes("profileModal"), "portrait modal JavaScript should be removed");
assert.doesNotMatch(html, /\b(dummy|placeholder|your-|example\.com|XXXXX)\b/i, "portfolio should not contain dummy data");
assert.doesNotMatch(html, /\borbit\b/i, "portfolio copy should not use the word orbit");
assert.doesNotMatch(html, /Automation outcomes that recruiters can scan in seconds\./, "impact headline should avoid the weaker recruiter-scan phrasing");
assert.doesNotMatch(html, /Proof of automation impact|Results-driven RPA development|Enterprise automation delivery|Concise project cards|A practical stack|Certifications, education|Let us talk about/, "section headings should use title case without trailing periods");
assert.doesNotMatch(html, /\bPython\b|\bJava\b|\.NET Framework|\bLEAD Analyst\b|Facial Recognition System/i, "portfolio should remove requested languages and projects");
assert.ok(html.includes('<link rel="icon" type="image/svg+xml" href="assets/rpa-favicon.svg" />'), "browser tab should use the RPA favicon");
assert.match(favicon, /<svg[\s\S]*RPA[\s\S]*#22D3EE[\s\S]*#FBBF24/, "favicon should be an RPA-themed SVG using the portfolio cyan and amber signal colors");
assert.ok(uipathCertificateSize > 8000, "UiPath certificate screenshot asset should be a real captured image");
assert.match(html, /<a class="certificate-card tilt-surface" href="https:\/\/credentials\.uipath\.com\/af5474d0-1b3d-4cfc-aa80-63c660805308" target="_blank" rel="noopener noreferrer" aria-label="Open UiPath ADPv1 certificate in a new tab">[\s\S]*<img src="assets\/uipath-adpv1-certificate\.png" alt="UiPath Advanced RPA Developer certificate screenshot" loading="lazy" decoding="async" \/>[\s\S]*View UiPath Certificate[\s\S]*<\/a>/, "Proof section should show a small clickable UiPath certificate screenshot opening in a new tab");
assert.match(css, /\.certificate-card\s*\{[\s\S]*?display:\s*grid;[\s\S]*?border:\s*1px\s+solid[\s\S]*?backdrop-filter:\s*blur\(14px\);/, "certificate screenshot card should keep the glass style");
assert.match(css, /\.certificate-card\s+img\s*\{[\s\S]*?aspect-ratio:\s*16\s*\/\s*10;[\s\S]*?object-fit:\s*cover;/, "certificate screenshot should stay compact and cropped cleanly");
assert.ok(html.includes('id="themeToggle"'), "portfolio should provide a dark/light theme toggle");
assert.ok(css.includes("text-align: justify"), "portfolio body copy should use justified text alignment");
assert.match(css, /h2\s*\{[\s\S]*?max-width:\s*none;[\s\S]*?overflow-wrap:\s*normal;/, "long section headings should use full box width instead of a narrow global cap");
assert.match(css, /\.composed-heading\s*\{[\s\S]*?display:\s*grid;[\s\S]*?gap:\s*clamp\(2px,\s*0\.35vw,\s*7px\);[\s\S]*?hyphens:\s*manual;/, "impacted headers should use manually composed line breaks");
assert.match(css, /\.heading-line\s*\{[\s\S]*?display:\s*block;[\s\S]*?max-width:\s*100%;[\s\S]*?white-space:\s*nowrap;/, "manual heading lines should render as controlled rows without internal wrapping");
assert.match(css, /\.contact-heading\s*\{[\s\S]*?max-width:\s*min\(100%,\s*20ch\);/, "contact heading should use a controlled editorial measure without crushing words");
assert.match(css, /\.heading-hyphen\s*\{[\s\S]*?letter-spacing:\s*0;/, "manual heading hyphen should be styled intentionally");
const composedHeadings = [...html.matchAll(/<h2 class="composed-heading/g)];
assert.equal(composedHeadings.length, 7, "every long section/contact heading should use the composed heading treatment");
assert.match(html, /<h2 class="composed-heading contact-heading" aria-label="Let Us Talk About RPA Delivery, Support, And Process Transformation">[\s\S]*Let Us Talk About RPA[\s\S]*Delivery, Support, And[\s\S]*Process Transfor<span class="heading-hyphen">-<\/span>[\s\S]*<span class="heading-line">mation<\/span>/, "contact heading should use a controlled manual hyphen break");
assert.match(css, /\.contact-main\s+p\s*\{[\s\S]*?max-width:\s*70ch;[\s\S]*?text-align:\s*left;[\s\S]*?text-align-last:\s*auto;[\s\S]*?text-justify:\s*auto;[\s\S]*?word-spacing:\s*normal;/, "contact copy should avoid forced justification gaps in the compact glass card");
assert.match(css, /\.panel-large\s+p\s*\{[\s\S]*?text-align:\s*justify;[\s\S]*?text-justify:\s*auto;[\s\S]*?word-spacing:\s*normal;/, "wide summary panels should use the cleaner justification pattern");
assert.match(css, /\.glass-panel:not\(\.panel-large\)\s+p,[\s\S]*?\.feature-list\s+li\s*\{[\s\S]*?text-align:\s*left;[\s\S]*?word-spacing:\s*normal;/, "compact cards and lists should avoid forced justification gaps");
assert.match(css, /@media \(max-width:\s*760px\)\s*\{[\s\S]*?\.contact-heading\s*\{[\s\S]*?max-width:\s*100%;/, "mobile contact heading should use the full narrow viewport");
assert.match(css, /\.hero\s*\{[\s\S]*?align-items:\s*start;/, "hero should top-align the right-side 3D scene");
assert.match(css, /\.hero\s*\{[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1\.08fr\)\s+minmax\(340px,\s*0\.92fr\);/, "hero copy should be widened to use empty horizontal space");
assert.match(html, /<div class="hero-full reveal">[\s\S]*<p class="hero-note">[\s\S]*My prior automation experience spans finance and retail domains[\s\S]*<\/p>[\s\S]*<div class="hero-action-strip"/, "domain note should be in a full-width hero area above the action strip");
assert.doesNotMatch(html, /class="domain-strip"|class="cta-row"/, "domain and CTA buttons should be merged into one div");
assert.match(css, /\.hero-full\s*\{[\s\S]*?grid-column:\s*1\s*\/\s*-1;/, "domain note and buttons should span the full hero width");
assert.match(css, /\.hero-note\s*\{[\s\S]*?max-width:\s*none;/, "domain note should use full available width");
assert.match(css, /\.hero-action-strip\s*\{[\s\S]*?display:\s*flex;[\s\S]*?flex-wrap:\s*nowrap;/, "merged hero buttons should stay in one line on desktop");
assert.match(html, /<span class="domain-chip">[\s\S]*Current HR domain[\s\S]*<\/span>\s*<span class="action-separator" aria-hidden="true"><\/span>\s*<a class="btn btn-primary"/, "hero action strip should separate domain chips from action buttons");
assert.match(css, /\.hero-action-strip\s*>\s*:not\(\.action-separator\)\s*\{[\s\S]*?flex:\s*1\s+1\s+0;/, "merged hero buttons should distribute across the full row without stretching the separator");
assert.match(css, /\.action-separator\s*\{[\s\S]*?flex:\s*0\s+0\s+1px;[\s\S]*?background:\s*linear-gradient/, "hero action strip should include a glass separator between chip and action groups");
assert.match(css, /\.btn,\s*[\s\S]*?\.domain-chip,\s*[\s\S]*?\.theme-toggle,\s*[\s\S]*?\.menu-toggle\s*\{[\s\S]*?backdrop-filter:\s*blur\(16px\);/, "button-like elements should share a glass treatment");
assert.match(css, /\.hero-full\.reveal\s*\{[\s\S]*?opacity:\s*1;[\s\S]*?transform:\s*none;/, "full-width hero note should remain visible in the top viewport");
assert.match(html, /<div class="contact-strip" aria-label="Quick contact details">[\s\S]*href="tel:\+919279632193"[\s\S]*href="mailto:Rajnishkumar94702@gmail\.com"[\s\S]*href="https:\/\/credentials\.uipath\.com\/af5474d0-1b3d-4cfc-aa80-63c660805308"/, "contact box should preserve clickable phone, email, and certification links");
assert.match(css, /\.contact-strip\s*\{[\s\S]*?width:\s*fit-content;[\s\S]*?margin:\s*14px\s+auto\s+0;[\s\S]*?justify-content:\s*center;[\s\S]*?border:\s*1px\s+solid/, "contact details should be centered in a designer box");
assert.match(css, /\.contact-strip\s+a\s*\{[\s\S]*?display:\s*inline-flex;[\s\S]*?border-bottom:\s*0;/, "contact links should be styled as clickable items inside the box");
assert.doesNotMatch(html, /<div class="automation-core"[^>]*>\s*-/, "3D core should not render a stray dash between hero intro and platform labels");
assert.match(html, /<div class="automation-core rpa-flow-core"[\s\S]*<p class="flow-label">RPA Flow Blueprint<\/p>[\s\S]*<div class="rpa-flowchart"[\s\S]*Trigger[\s\S]*Validate[\s\S]*Queue[\s\S]*Run Bot[\s\S]*Decision[\s\S]*Retry[\s\S]*Report/, "3D core should render a transparent RPA flowchart in the middle");
assert.doesNotMatch(html, /class="scene-node|Execution Layer|Queue Signals|Recovery Path|Test Layer/, "old floating badge nodes should be removed from the 3D scene");
assert.doesNotMatch(html, /class="float-card/, "tool cards should not sit behind or overlap the transparent RPA flowchart");
const sceneToolStrip = html.match(/<div class="scene-tool-strip"[\s\S]*?<\/div>/)?.[0] ?? "";
assert.match(sceneToolStrip, /UiPath[\s\S]*Blue Prism[\s\S]*Power Automate[\s\S]*Integrations/, "tool context should keep the platform and integration labels");
assert.doesNotMatch(sceneToolStrip, /tool-impact|>\s*Impact\s*</, "top 3D tool strip should not include an Impact chip");
assert.doesNotMatch(css, /\.tool-impact\s*\{/, "unused Impact chip styling should be removed with the top chip");
assert.match(html, /class="tool-pill tool-uipath"[\s\S]*UiPath/, "UiPath tool chip should carry a branded class");
assert.match(html, /class="tool-pill tool-blueprism"[\s\S]*Blue Prism/, "Blue Prism tool chip should carry a branded class");
assert.match(html, /class="tool-pill tool-powerautomate"[\s\S]*Power Automate/, "Power Automate tool chip should carry a branded class");
assert.match(css, /--uipath-orange:\s*#FA4616;[\s\S]*--uipath-blue:\s*#0067DF;/, "UiPath brand tones should be available as CSS tokens");
assert.match(css, /--blueprism-blue:\s*#0077C8;[\s\S]*--blueprism-cobalt:\s*#0B4D99;[\s\S]*--blueprism-navy:\s*#131E58;/, "Blue Prism brand tones should be available as CSS tokens");
assert.match(css, /--powerautomate-navy:\s*#102784;[\s\S]*--powerautomate-blue:\s*#2764E7;[\s\S]*--powerautomate-cyan:\s*#0FAFFF;[\s\S]*--powerautomate-sky:\s*#6CE0FF;/, "Power Automate tones should be sampled from Microsoft's official scalable icon");
assert.match(css, /\.tool-uipath\s*\{[\s\S]*?var\(--uipath-orange\)[\s\S]*?var\(--uipath-blue\)/, "UiPath glass pill should use UiPath orange and blue");
assert.match(css, /\.tool-blueprism\s*\{[\s\S]*?var\(--blueprism-blue\)[\s\S]*?var\(--blueprism-navy\)/, "Blue Prism glass pill should use Blue Prism blue and navy");
assert.match(css, /\.tool-powerautomate\s*\{[\s\S]*?var\(--powerautomate-blue\)[\s\S]*?var\(--powerautomate-cyan\)/, "Power Automate glass pill should use Power Automate blue and cyan");
assert.match(css, /body\[data-theme="light"\]\s*\{[\s\S]*?--void:\s*#f5f8fc;[\s\S]*?--deep:\s*#e9f1f6;[\s\S]*?--ink:\s*#0b1220;[\s\S]*?--glass:\s*rgba\(255,\s*255,\s*255,\s*0\.84\);/, "light theme should use a refined cool-neutral palette");
assert.match(css, /body\[data-theme="light"\]::before\s*\{[\s\S]*?rgba\(15,\s*23,\s*42,\s*0\.045\)/, "light theme should soften the background grid instead of using white-on-white texture");
assert.match(css, /body\[data-theme="light"\]\s+\.hero-lead\s*\{[\s\S]*?rgba\(255,\s*255,\s*255,\s*0\.84\)[\s\S]*?rgba\(15,\s*23,\s*42,\s*0\.12\)/, "light theme hero intro glass should avoid the cheap dark grey overlay");
assert.match(css, /body\[data-theme="light"\]\s+\.metric,[\s\S]*?body\[data-theme="light"\]\s+\.certificate-card\s*\{[\s\S]*?rgba\(255,\s*255,\s*255,\s*0\.78\)[\s\S]*?rgba\(15,\s*23,\s*42,\s*0\.11\)/, "light theme cards should use premium white glass surfaces");
assert.match(css, /body\[data-theme="light"\]\s+\.automation-core\s*\{[\s\S]*?rgba\(37,\s*99,\s*235,\s*0\.13\)[\s\S]*?rgba\(20,\s*184,\s*166,\s*0\.08\)/, "light theme 3D core should use a polished blue-teal depth treatment");
assert.match(css, /body\[data-theme="light"\]\s+\.tool-uipath\s*\{[\s\S]*?rgba\(250,\s*70,\s*22,\s*0\.18\)[\s\S]*?rgba\(255,\s*255,\s*255,\s*0\.78\)/, "light theme branded tool chips should be bright glass instead of dark grey");
assert.match(css, /\.hero-full\s*\{[\s\S]*?margin-top:\s*12px;/, "full-width domain note should have a visible line break after the hero intro row");
assert.match(css, /\.rpa-flow-core\s*\{[\s\S]*?top:\s*42%;/, "flowchart core should sit above the tool strip with room below");
assert.match(css, /\.scene-tool-strip\s*\{[\s\S]*?position:\s*absolute;[\s\S]*?bottom:\s*6%;[\s\S]*?z-index:\s*7;/, "tool strip should sit below the flowchart instead of overlapping it");
assert.match(css, /\.scene-tool-strip\s*\{[\s\S]*?display:\s*flex;[\s\S]*?flex-wrap:\s*nowrap;/, "desktop tool strip should use natural-width pills to avoid label overlap");
assert.match(css, /\.hero-copy,\s*[\s\S]*?\.hero-full,\s*[\s\S]*?\.hero-scene\s*\{[\s\S]*?min-width:\s*0;/, "hero grid children should not create horizontal overflow");
assert.match(css, /@media \(max-width:\s*760px\)\s*\{[\s\S]*?\.hero\s*\{[\s\S]*?grid-template-columns:\s*1fr;[\s\S]*?padding-top:\s*112px;/, "mobile hero should use one compact column");
assert.match(css, /@media \(max-width:\s*760px\)\s*\{[\s\S]*?h1\s*\{[\s\S]*?font-size:\s*clamp\(30px,\s*9\.4vw,\s*42px\);[\s\S]*?overflow-wrap:\s*anywhere;/, "mobile headline should scale down and wrap safely");
assert.match(css, /@media \(max-width:\s*760px\)\s*\{[\s\S]*?\.eyebrow\s*\{[\s\S]*?font-size:\s*10px;[\s\S]*?overflow-wrap:\s*anywhere;/, "mobile eyebrow should wrap safely");
assert.match(css, /@media \(max-width:\s*760px\)\s*\{[\s\S]*?\.hero-scene\s*\{[\s\S]*?min-height:\s*390px;/, "mobile 3D scene should be compact");
assert.match(css, /@media \(max-width:\s*760px\)\s*\{[\s\S]*?\.hero-action-strip\s*>\s*:not\(\.action-separator\)\s*\{[\s\S]*?flex:\s*1\s+1\s+calc\(50%\s*-\s*8px\);/, "mobile action strip should use a compact two-column layout");
assert.match(css, /@media \(max-width:\s*760px\)\s*\{[\s\S]*?\.action-separator\s*\{[\s\S]*?flex-basis:\s*100%;[\s\S]*?height:\s*1px;/, "mobile separator should become a horizontal divider");
assert.match(css, /@media \(max-width:\s*540px\)\s*\{[\s\S]*?\.hero-action-strip\s*>\s*:not\(\.action-separator\)\s*\{[\s\S]*?flex-basis:\s*100%;/, "very small screens should stack action buttons safely");
assert.match(css, /\.section-head\s*\{[\s\S]*?align-items:\s*center;/, "section labels should be vertically centered against their heading rows");
assert.match(css, /\.section-head\s+\.eyebrow\s*\{[\s\S]*?align-self:\s*center;[\s\S]*?margin:\s*0;/, "section eyebrow labels should sit centered on the left side of each section heading row");
assert.match(css, /\.section-head\s+\.eyebrow\s*\{[\s\S]*?border:\s*1px\s+solid[\s\S]*?background:\s*linear-gradient\(90deg,[\s\S]*?backdrop-filter:\s*blur\(14px\);/, "section labels should use a fading glass treatment");
assert.match(css, /\.section-head\s+\.eyebrow::after\s*\{[\s\S]*?background:\s*linear-gradient\(90deg,[\s\S]*?transparent\);/, "section label glass should fade out toward the heading");
assert.match(css, /\.hero-lead\s*\{[\s\S]*?text-align:\s*justify;[\s\S]*?border:\s*1px\s+solid[\s\S]*?backdrop-filter:\s*blur\(16px\);/, "hero intro should use justified text inside a glass panel");
assert.match(css, /@media \(max-width:\s*760px\)\s*\{[\s\S]*?\.hero-lead\s*\{[\s\S]*?max-width:\s*100%;[\s\S]*?text-align:\s*left;[\s\S]*?overflow-wrap:\s*anywhere;/, "mobile hero intro should remain readable inside the glass panel");
assert.match(css, /\.timeline-time\s*\{[\s\S]*?display:\s*flex;[\s\S]*?align-items:\s*center;[\s\S]*?justify-content:\s*center;[\s\S]*?text-align:\s*center;/, "experience dates should be centered in the left timeline column");
assert.match(css, /\.metric,\s*[\s\S]*?\.glass-panel,\s*[\s\S]*?\.project-card,\s*[\s\S]*?\.timeline-item,\s*[\s\S]*?\.contact-main,\s*[\s\S]*?\.contact-actions,\s*[\s\S]*?\.certificate-card\s*\{[\s\S]*?transition:[\s\S]*?transform\s+220ms\s+var\(--ease\)/, "box surfaces should share a subtle hover tilt transition");
assert.match(css, /\.tilt-surface:hover\s*\{[\s\S]*?border-color:\s*rgba\(34,\s*211,\s*238,\s*0\.34\);/, "tilting box surfaces should get a restrained hover edge");
assert.ok(script.includes('document.querySelectorAll(".tilt-surface")'), "tilt behavior should apply to shared box surfaces, not only project cards");
assert.match(script, /rotateX\(\$\{y\s*\*\s*-2\.2\}deg\)\s+rotateY\(\$\{x\s*\*\s*2\.8\}deg\)\s+translateY\(-2px\)/, "box tilt should be intentionally subtle");
assert.match(html, /<svg class="icon-sprite" aria-hidden="true"/, "portfolio should define a reusable inline icon sprite");
for (const iconId of ["icon-linkedin", "icon-github", "icon-mail", "icon-phone", "icon-star", "icon-external"]) {
  assert.ok(html.includes(`id="${iconId}"`), `portfolio should define ${iconId}`);
}
assert.match(css, /\.icon\s*\{[\s\S]*?width:\s*1em;[\s\S]*?height:\s*1em;[\s\S]*?stroke:\s*currentColor;/, "icons should share a consistent inline SVG treatment");
assert.match(html, /<a class="btn btn-primary" href="mailto:Rajnishkumar94702@gmail\.com">\s*<svg class="icon"/, "email button should include an icon");
assert.match(html, /<a class="btn" href="https:\/\/www\.linkedin\.com\/in\/rajnishkumar3006\/"[\s\S]*?>\s*<svg class="icon"[\s\S]*icon-linkedin/, "LinkedIn button should include an icon");
assert.match(html, /<a class="btn" href="https:\/\/github\.com\/rajnish3006\?tab=repositories"[\s\S]*?>\s*<svg class="icon"[\s\S]*icon-github/, "GitHub button should include an icon");
assert.match(css, /\.rpa-flowchart\s*\{[\s\S]*?backdrop-filter:\s*blur\(18px\);[\s\S]*?transform-style:\s*preserve-3d;/, "transparent RPA flowchart should use glass and 3D layering");
assert.match(css, /\.rpa-flow-lines\s*\{[\s\S]*?position:\s*absolute;[\s\S]*?opacity:\s*0\.72;/, "flowchart should include visible connector lines");
assert.match(css, /\.flow-node\s*\{[\s\S]*?position:\s*absolute;[\s\S]*?background:\s*linear-gradient/, "flowchart nodes should be positioned glass process symbols");
assert.match(css, /\.flow-decision\s*\{[\s\S]*?transform:\s*rotate\(45deg\);/, "flowchart should include a diamond decision symbol");
assert.match(css, /\.flow-decision\s+span\s*\{[\s\S]*?transform:\s*rotate\(-45deg\);/, "decision label should remain readable inside the diamond");
assert.match(css, /\.tool-pill\s*\{[\s\S]*?backdrop-filter:\s*blur\(14px\);/, "tool strip pills should keep the glass styling without entering the flowchart");
assert.match(css, /@media \(max-width:\s*760px\)\s*\{[\s\S]*?\.scene-tool-strip\s*\{[\s\S]*?grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\);/, "mobile tool strip should wrap below the flowchart safely");
assert.match(css, /@keyframes\s+textVanish[\s\S]*?filter:\s*blur\(10px\);/, "header text should have a slow appearing and disappearing motion effect");
assert.match(css, /\.kinetic-title\s*\{[\s\S]*?animation:\s*textVanish\s+11s/, "selected headers should use the slow text motion treatment");
assert.match(html, /<span class="headline-line"><span class="headline-accent"><span class="kinetic-title">Building RPA Bots<\/span><\/span><\/span>/, "hero headline should use deliberate wrapped lines with the kinetic title treatment");
assert.match(css, /\.headline-line\s*\{[\s\S]*?display:\s*block;/, "hero headline lines should prevent mobile horizontal overflow");
assert.match(css, /@media \(max-width:\s*760px\)\s*\{[\s\S]*?\.hero-copy\s*>\s*\.eyebrow\s*\{[\s\S]*?white-space:\s*normal;[\s\S]*?word-break:\s*break-word;/, "mobile hero eyebrow should wrap instead of clipping");
assert.match(css, /@media \(max-width:\s*760px\)\s*\{[\s\S]*?\.hero-copy,\s*[\s\S]*?\.hero-full,\s*[\s\S]*?\.hero-lead,\s*[\s\S]*?\.hero-note,\s*[\s\S]*?\.hero-scene\s*\{[\s\S]*?max-width:\s*calc\(100vw\s*-\s*24px\);/, "mobile hero content should be capped to the viewport width");
assert.match(html, /<h2 class="composed-heading project-heading" aria-label="RPA Project Missions Across HR, Finance, Retail, and Support">[\s\S]*<span class="heading-line kinetic-title">RPA Project Missions<\/span>[\s\S]*Across HR, Finance, Retail, and Support/, "project header should keep the kinetic title treatment inside two composed lines");
assert.match(html, /<div class="project-actions">[\s\S]*icon-github[\s\S]*icon-star[\s\S]*icon-external[\s\S]*Fetch-Temperature-detail-from-OpenWeather_API_UiPath/, "OpenWeather GitHub project should expose GitHub, star, and open-link actions");
assert.match(html, /<div class="project-actions">[\s\S]*icon-github[\s\S]*icon-star[\s\S]*icon-external[\s\S]*RPA_RE_Framework_RPA_Challenge_UiPath/, "RPA Challenge GitHub project should expose GitHub, star, and open-link actions");
assert.match(css, /\.project-actions\s*\{[\s\S]*?display:\s*flex;[\s\S]*?gap:\s*8px;/, "GitHub project actions should render as compact icon rows");
assert.match(css, /\.project-card\s+h3\s*\{[\s\S]*?overflow-wrap:\s*anywhere;[\s\S]*?word-break:\s*break-word;/, "long project titles should wrap inside project cards");
assert.match(css, /@media \(max-width:\s*760px\)\s*\{[\s\S]*?\.kinetic-title\s*\{[\s\S]*?animation-duration:\s*13s;/, "mobile kinetic text should remain slower and readable");

const buttonLikeLinks = [...html.matchAll(/<a\b[^>]*class="[^"]*\bbtn\b[^"]*"[^>]*href="([^"]+)"/g)].map((match) => match[1]);
assert.ok(buttonLikeLinks.length >= 4, "there should be at least four clickable button-style links");
assert.ok(buttonLikeLinks.every((href) => href && href !== "#"), "all button-style links should have real href values");
