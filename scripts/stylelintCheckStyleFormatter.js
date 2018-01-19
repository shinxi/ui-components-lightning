function escape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/`/g, '&#x60;');
}
function genStylelintResult(stylelintResult) {
  return `<file name="${escape(stylelintResult.source)}">
    ${!stylelintResult.warnings.length
    ? ''
    : stylelintResult.warnings.map(warning =>
    `    <error source="${escape(`stylelint.rules. ${warning.rule}`)}"
    line="${escape(warning.line)}"
    column="${escape(warning.column)}"
    severity="${escape(warning.severity)}"
    message="${escape(warning.text)}" />`).join('\n')}
    </file>
  `;
}
module.exports = stylelintResults => `<?xml version="1.0" encoding="utf-8"?>
<checkstyle version="4.3">
${stylelintResults
.map(stylelintResult => genStylelintResult(stylelintResult))
.join('\n')}
</checkstyle>`;
