# IMPORTANT: Do Not Run render.js

index.html in this folder is a hand-maintained, custom-built file (847 lines as of June 16, 2026). It has diverged significantly from the jsonresume-theme-even theme that render.js was originally built to generate.

Running `node render.js` will REGENERATE index.html from resume.json using the generic theme template, which will DESTROY:
- Custom CSS and layout
- Schema.org JSON-LD structured data
- OpenGraph meta tags
- Hand-tuned content not present in resume.json

resume.json is kept roughly in sync with index.html content for data-source completeness, but it is NOT the active source for the live site. The live site (syrp.ai/resume) is index.html itself.

If you need to update the website, edit index.html directly. Do not run render.js unless you intend to fully rebuild the site from scratch and are prepared to manually re-add all custom sections afterward.

Last confirmed: June 16, 2026 (Claude Code session, post Brad resume revision).
