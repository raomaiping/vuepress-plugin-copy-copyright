// const { path } = require("@vuepress/shared-utils");
const path = require('path');

module.exports = (options = {}) => ({
  name: 'juejin-copy',
  define() {
    const {
      selector = 'div[class*="language-"] pre',
      copyText = 'Copy code',
      time = 3000,
      tip: { content = 'copy success', title = 'Tips' } = {},
      change,
      copyright = false,
      authorName = '',
      visibleTip = true,
    } = options;
    return {
      selector,
      copyText,
      time,
      content,
      title,
      change,
      visibleTip,
      copyright,
      authorName
    };
  },

  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),
  enhanceAppFiles: [path.resolve(__dirname, 'appFile.js')],
});


