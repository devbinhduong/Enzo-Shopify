class SearchBrands extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.input = this.querySelector('input');
    this.brandItems = this.querySelectorAll('.menu-drawer__menu-item:not(.menu-drawer__menu-item-level-2)');

    if (this.input) {
      this.input.addEventListener('input', this.debounce(this.filterBrands.bind(this), 500));
    } 
  }

  debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
  }

  filterBrands() {
    const searchTerm = this.input.value.trim().toLowerCase();
    
    if (searchTerm === "") {
      this.brandItems.forEach(item => item.classList.add('visible'));
      return; 
    }

    this.brandItems.forEach(item => {
      const brandName = item.textContent.trim().toLowerCase();

      if (brandName.includes(searchTerm)) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });
  }
}

customElements.define('search-brands', SearchBrands);