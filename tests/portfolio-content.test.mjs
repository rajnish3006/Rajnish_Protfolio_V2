import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const indexPath = join(root, "index.html");
const cssPath = join(root, "styles.css");
const scriptPath = join(root, "script.js");
const resumePath = join(root, "assets", "Rajnish_Kumar_Feb_26.pdf");

assert.equal(existsSync(indexPath), true, "index.html should exist");
assert.equal(existsSync(cssPath), true, "styles.css should exist");
assert.equal(existsSync(scriptPath), true, "script.js should exist");
assert.equal(existsSync(resumePath), true, "resume PDF should be copied into assets");

const html = readFileSync(indexPath, "utf8");
const css = readFileSync(cssPath, "utf8");
const script = readFileSync(scriptPath, "utf8");

const requiredText = [
  "Rajnish Kumar",
  "RPA Developer",
  "Process Automation Specialist",
  "Building RPA bots that move faster, fail safer, and scale cleaner.",
  "I am Rajnish Kumar, an RPA Developer with 4+ years of experience designing, developing, deploying, and stabilizing enterprise automation solutions across UiPath, Blue Prism, Power Automate Desktop, and Power Automate Cloud.",
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
  "Finance, retail, and HR domain exposure",
  "UiPath Advanced RPA Developer",
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
assert.doesNotMatch(html, /\bPython\b|\bJava\b|\.NET Framework|\bLEAD Analyst\b|Facial Recognition System/i, "portfolio should remove requested languages and projects");
assert.ok(html.includes('id="themeToggle"'), "portfolio should provide a dark/light theme toggle");
assert.ok(css.includes("text-align: justify"), "portfolio body copy should use justified text alignment");
assert.match(css, /\.hero\s*\{[\s\S]*?align-items:\s*start;/, "hero should top-align the right-side 3D scene");
assert.match(css, /\.hero\s*\{[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1\.08fr\)\s+minmax\(340px,\s*0\.92fr\);/, "hero copy should be widened to use empty horizontal space");
assert.match(html, /<div class="hero-full reveal">[\s\S]*<p class="hero-note">[\s\S]*My prior automation experience spans finance and retail domains[\s\S]*<\/p>[\s\S]*<div class="hero-action-strip"/, "domain note should be in a full-width hero area above the action strip");
assert.doesNotMatch(html, /class="domain-strip"|class="cta-row"/, "domain and CTA buttons should be merged into one div");
assert.match(css, /\.hero-full\s*\{[\s\S]*?grid-column:\s*1\s*\/\s*-1;/, "domain note and buttons should span the full hero width");
assert.match(css, /\.hero-note\s*\{[\s\S]*?max-width:\s*none;/, "domain note should use full available width");
assert.match(css, /\.hero-action-strip\s*\{[\s\S]*?display:\s*flex;[\s\S]*?flex-wrap:\s*nowrap;/, "merged hero buttons should stay in one line on desktop");
assert.match(css, /\.hero-action-strip\s*>\s*\*\s*\{[\s\S]*?flex:\s*1\s+1\s+0;/, "merged hero buttons should distribute across the full row");
assert.match(css, /\.hero-full\.reveal\s*\{[\s\S]*?opacity:\s*1;[\s\S]*?transform:\s*none;/, "full-width hero note should remain visible in the top viewport");
assert.match(html, /<div class="contact-strip" aria-label="Quick contact details">[\s\S]*href="tel:\+919279632193"[\s\S]*href="mailto:Rajnishkumar94702@gmail\.com"[\s\S]*href="https:\/\/credentials\.uipath\.com\/af5474d0-1b3d-4cfc-aa80-63c660805308"/, "contact box should preserve clickable phone, email, and certification links");
assert.match(css, /\.contact-strip\s*\{[\s\S]*?width:\s*fit-content;[\s\S]*?margin:\s*14px\s+auto\s+0;[\s\S]*?justify-content:\s*center;[\s\S]*?border:\s*1px\s+solid/, "contact details should be centered in a designer box");
assert.match(css, /\.contact-strip\s+a\s*\{[\s\S]*?display:\s*inline-flex;[\s\S]*?border-bottom:\s*0;/, "contact links should be styled as clickable items inside the box");
assert.doesNotMatch(html, /<div class="automation-core"[^>]*>\s*-/, "3D core should not render a stray dash between hero intro and platform labels");
assert.match(html, /<div class="automation-core"[^>]*>\s*<span><\/span>\s*<span><\/span>\s*<span><\/span>\s*<\/div>/, "3D core should keep three decorative layers");
assert.match(css, /\.hero-full\s*\{[\s\S]*?margin-top:\s*12px;/, "full-width domain note should have a visible line break after the hero intro row");
assert.match(css, /\.card-impact\s*\{[\s\S]*?right:\s*28%;[\s\S]*?top:\s*0;/, "Impact floating card should sit away from Blue Prism");
assert.match(css, /\.card-blueprism\s*\{[\s\S]*?right:\s*0;[\s\S]*?top:\s*26%;/, "Blue Prism floating card should sit lower to avoid overlap");

const buttonLikeLinks = [...html.matchAll(/<a\b[^>]*class="[^"]*\bbtn\b[^"]*"[^>]*href="([^"]+)"/g)].map((match) => match[1]);
assert.ok(buttonLikeLinks.length >= 4, "there should be at least four clickable button-style links");
assert.ok(buttonLikeLinks.every((href) => href && href !== "#"), "all button-style links should have real href values");
