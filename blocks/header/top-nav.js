// eslint-disable-next-line func-names
export default class topHeader {
  constructor(options) {
    this.options = options || {};
    this.defaultOptions = {
      backgroundColor: '#000',
      textColor: '#fff',
      position: 'fixed',
      width: '100%',
      zindex: '4',
    };
    this.config = { ...this.defaultOptions, ...this.options };
    this.init();
  }

  init() {
    this.createHeader();
  }

  createHeader() {
    const subHeader = document.createElement('div');
    const registerURL = '/register';
    const topMenu = `<ul class="quick-actions"><li><a href="${registerURL}">Sign In</a></li></ul>`;
    subHeader.className = 'eds-top-header';
    subHeader.style.backgroundColor = this.config.backgroundColor;
    subHeader.style.color = this.config.textColor;
    subHeader.style.width = this.config.width;
    subHeader.style.position = this.config.position;
    subHeader.style.zIndex = this.config.zindex;
    subHeader.innerHTML = topMenu;

    document.body.prepend(subHeader, document.body.firstChild);
  }
}
