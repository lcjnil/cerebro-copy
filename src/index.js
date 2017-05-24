const whiteIcon = require('./assets/copy-white.png')
const blackIcon = require('./assets/copy-black.png')

const fn = ({term, display, actions}) => {
  const isDarkTheme = document.getElementById('cerebro-theme').href.includes('dark')
  display({
    icon: isDarkTheme ? whiteIcon : blackIcon,
    title: 'Copy to clipboard',
    onSelect() { actions.copyToClipboard(term) }
  })
};

module.exports = {
  fn,
  name: 'Copy'
}
